/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";

const DiscussionDetail = () => {
  const { id } = useParams();
  const [dataFetched, setDataFetched] = useState(false);

  function formatDiscussionDate(created_at) {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(created_at).toLocaleDateString("en-US", options);
  }

  const formatRepliesDate = (replies) => {
    return replies.map((reply) => ({
      ...reply,
      created_at: formatDiscussionDate(reply.created_at),
    }));
  };

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const [comment, setComment] = useState("");
  const [warning, setWarning] = useState("");

  const newCommentHandler = async (event) => {
    event.preventDefault();

    if (!comment.trim()) {
      setWarning("Comment cannot be empty!");
      return;
    }

    try {
      const { error } = await supabase.from("discussion_replies").insert({
        id_user: session.user.id,
        reply: comment,
        id_discussion: id,
      });

      if (error) {
        console.error(error);
      } else {
        alert("Your comment posted!");
        setWarning("");
        fetchDiscussions();
        setComment("");
      }
    } catch (error) {
      console.error("Error posting comment:", error.message);
    }
  };

  const [discussion, setDiscussion] = useState([]);
  const [replies, setReplies] = useState([]);
  const navigate = useNavigate();

  const fetchDiscussions = async () => {
    try {
      const { data: discussionsData, error: discussionsError } = await supabase
        .from("discussion")
        .select(
          `
                id,
                created_at,
                id_user,
                profiles (id, full_name),
                title,
                description
              `
        )
        .eq("id", id)
        .single();

      if (discussionsError) {
        throw discussionsError;
      }

      const { data: repliesData, error: repliesError } = await supabase
        .from("discussion_replies")
        .select(
          `
            *,
            profiles (id, full_name)
          `
        )
        .eq("id_discussion", id);

      if (repliesError) {
        throw repliesError;
      }

      setDiscussion({
        ...discussionsData,
        created_at: formatDiscussionDate(discussionsData.created_at),
        profiles: discussionsData.profiles,
      });

      setReplies(formatRepliesDate(repliesData || []));
      setDataFetched(true);
    } catch (error) {
      console.error("Error fetching discussions:", error.message);
    }
  };

  useEffect(() => {
    if (!dataFetched) {
      fetchDiscussions();
    }
  }, [dataFetched, fetchDiscussions, id]);

  const deleteDiscussionHandler = async () => {
    try {
      const { error } = await supabase
        .from("discussion_replies")
        .delete()
        .eq("id_discussion", id);

      const shouldDelete = window.confirm(
        "Are you sure you want to delete this discussion?"
      );
      if (shouldDelete) {
        if (error) {
          console.error("Error deleting discussion:", error.message);
        } else {
          const { error } = await supabase
            .from("discussion")
            .delete()
            .eq("id", id);
          if (error) {
            console.error("Error deleting discussion:", error.message);
          } else {
            localStorage.removeItem("discussions");
            navigate("/community");
            alert("Discussion deleted!");
          }
          // Redirect to the community page after deletion
        }
      } else {
        alert("Deletion canceled.");
      }
    } catch (error) {
      console.error("Error handling delete discussion:", error.message);
    }
  };

  if (!discussion) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="relative flex px-10 gap-14 lg:px-24 py-14 text-nutricare-green"
      id="discussion"
    >
      <div className="mx-auto">
        <div className="flex justify-between items-center pb-4">
          <div className="">
            <div className="flex items-center justify-between">
              <div>
                <Typography
                  variant="h3"
                  className="break-all max-w-4xl break-words pr-8"
                >
                  {discussion.title}
                </Typography>
                <Typography
                  variant="paragraph"
                  className="mb-4 max-w-4xl break-words"
                >
                  {discussion.description}
                </Typography>
              </div>
              {session &&
                session.user &&
                session.user.id === discussion.id_user && (
                  <>
                    <div className="hidden lg:block">
                      <Button
                        onClick={deleteDiscussionHandler}
                        className="bg-nutricare-orange hover:bg-red-500"
                      >
                        Delete Discussion
                      </Button>
                    </div>
                    <Menu className="lg:hidden" placement="bottom-end">
                      <MenuHandler>
                        <i className="fas fa-ellipsis-v px-2 lg:hidden"></i>
                      </MenuHandler>
                      <MenuList>
                        <MenuItem
                          className="text-red-500"
                          onClick={deleteDiscussionHandler}
                        >
                          Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </>
                )}
            </div>
            <div className="flex gap-4 lg:gap-8">
              <Typography
                variant="paragraph"
                className="text-nutricare-green font-semibold"
              >
                by{" "}
                <span className="text-nutricare-orange">
                  {discussion.profiles?.full_name
                    ? discussion.profiles.full_name
                    : "-"}
                </span>
              </Typography>
              <Typography
                variant="paragraph"
                className="text-nutricare-green font-semibold"
              >
                {discussion.created_at}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-nutricare-green font-semibold"
              >
                {replies.length} Comments
              </Typography>
            </div>
          </div>
        </div>
        <div className="mb-8">
          {/* Menampilkan pesan warning */}
          {warning && (
            <div className="text-nutricare-merah mb-2">{warning}</div>
          )}

          <form onSubmit={newCommentHandler}>
            <div className="w-100">
              <Textarea
                color="green"
                disabled={session ? false : true}
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                label="Comment"
              />
            </div>
            <Button
              type="submit"
              disabled={session ? false : true}
              className="bg-nutricare-green hover:bg-nutricare-orange mt-2"
            >
              Post Comments
            </Button>
          </form>
        </div>
        <div>
          <div className="w-100 mb-4">
            <Typography variant="h4">{replies.length} Comments</Typography>
          </div>
          <div className="flex flex-col gap-8">
            {replies.map((reply) => (
              <div className="flex flex-col gap-2" key={reply.id}>
                <div className="flex gap-4 lg:gap-8">
                  <Typography
                    variant="paragraph"
                    className="text-nutricare-green font-semibold"
                  >
                    <span className="text-nutricare-orange">
                      {reply.profiles.full_name}
                    </span>
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-nutricare-green font-semibold"
                  >
                    {reply.created_at}
                  </Typography>
                </div>
                <div>
                  <Typography variant="paragraph">{reply.reply}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionDetail;
