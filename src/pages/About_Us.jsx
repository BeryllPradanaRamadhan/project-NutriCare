import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";

const Hero = () => {
  return (
    <div className="relative flex bg-gradient-to-b from-white to-light-green-200 justify-center px-10 gap-14 lg:px-24 py-14 text-nutricare-green">
      <img
        src="illustration/team.svg"
        alt="Anatomy"
        className="h-72 hidden lg:block xl:block"
      />
      <div className="max-w-xl">
        <div>
          <div>
            <Typography variant="h1" className="mb-4 max-w-lg">
              <span className="text-nutricare-orange">NutriCare</span>
              <br />
              Team Project
            </Typography>
          </div>
          <div>
            <Typography variant="paragraph" className="text-lg">
              Our team comprises dedicated individuals with a{" "}
              <span className="text-nutricare-orange">shared vision</span> — to
              create a platform that goes beyond the conventional, offering more
              than just a{" "}
              <span className="text-nutricare-orange">BMI calculator</span> and
              health articles.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

const Developers = () => {
  return (
    <div className="relative flex flex-col justify-center bg-light-green-50 text-center px-10 lg:px-24 py-14 text-nutricare-green">
      <div className="max-w-md lg:max-w-3xl mx-auto my-8">
        <Typography variant="h1" className="mb-2">
          <span className="text-nutricare-orange">Developer</span> Team
        </Typography>
        <Typography variant="paragraph" className="text-lg">
          As the developers behind{" "}
          <span className="text-nutricare-orange">NutriCare</span>, we want to
          express our deep gratitude for being a part of this journey toward a
          healthier and happier you.{" "}
          <span className="text-nutricare-orange">Say Hi!</span>
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center gap-y-6 gap-x-10">
        <Card className="w-64">
          <CardHeader floated={false} className="">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" className="text-nutricare-orange">
              Beryll Ramadhan
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green"
            >
              Front-End Developer
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-0 pb-4">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-linkedin" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-github" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-64">
          <CardHeader floated={false} className="">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" className="text-nutricare-orange">
              Bernard Sianturi
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green"
            >
              Front-End Developer
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-0 pb-4">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-linkedin" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-github" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-64">
          <CardHeader floated={false} className="">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center px-0">
            <Typography variant="h4" className="text-nutricare-orange">
              Agus Nanda
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green"
            >
              Designer & Front-End Developer
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-0 pb-4">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-linkedin" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-github" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-64">
          <CardHeader floated={false} className="">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" className="text-nutricare-orange">
              Imam Hidayat
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green"
            >
              Front-End Developer
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-0 pb-4">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-linkedin" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-github" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-64">
          <CardHeader floated={false} className="">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" className="text-nutricare-orange">
              Husain Abdullah
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green"
            >
              Back-End Developer
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-0 pb-4">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-linkedin" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-github" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

const Advisor = () => {
  return (
    <div className="relative flex flex-col justify-center bg-light-green-50 text-center px-10 lg:px-24 py-14 text-nutricare-green">
      <div className="max-w-md lg:max-w-3xl mx-auto my-8">
        <Typography variant="h1" className="mb-2">
          Our <span className="text-nutricare-orange">Advisor</span>
        </Typography>
        <Typography variant="paragraph" className="text-lg">
          The NutriCare development team is thrilled to extend a warm welcome on
          behalf of our{" "}
          <span className="text-nutricare-orange">esteemed advisor</span>. With
          pride, our advisor helped us to craft{" "}
          <span className="text-nutricare-orange">NutriCare</span> as a
          comprehensive resource for health and wellness.
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center gap-y-6 gap-x-10">
        <Card className="w-64">
          <CardHeader floated={false} className="">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center px-0">
            <Typography variant="h5" className="text-nutricare-orange">
              Shidqi Rifat Pangestu
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green"
            >
              Advisor
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-0 pb-4">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-linkedin" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                className="text-nutricare-green"
              >
                <i className="fab fa-github" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

function AboutUs() {
  return (
    <>
      <Hero />
      <Developers />
      <Advisor />
    </>
  );
}

export default AboutUs;
