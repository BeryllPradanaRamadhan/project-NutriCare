import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BMITest from "../BMI_Test";

// Mocking IntersectionObserver
class IntersectionObserverMock {
  observe() {}
  disconnect() {}
}

beforeAll(() => {
  window.IntersectionObserver = IntersectionObserverMock;
});

afterAll(() => {
  delete window.IntersectionObserver;
});

test("Renders BMI Test component", async () => {
  render(<BMITest />);

  // Wait for the component to be loaded (use a text that is always present)
  await waitFor(() => {
    const guidanceText = screen.getAllByText(/Guidance for/i);
    const bmiCalculateText = screen.getAllByText(/BMI Calculate/i);

    guidanceText.forEach((text) => expect(text).toBeInTheDocument());
    bmiCalculateText.forEach((text) => expect(text).toBeInTheDocument());
  });

  // Check if the specific text is also present
  const calculateBmiText = screen.getAllByText(/Calculate BMI/i);
  const hereText = screen.getAllByText(/Here/i);

  calculateBmiText.forEach((text) => expect(text).toBeInTheDocument());
  hereText.forEach((text) => expect(text).toBeInTheDocument());
});

test("Calculates BMI correctly", async () => {
  render(<BMITest />);

  // Mock user input
  fireEvent.change(screen.getByPlaceholderText(/ex: 20/i), {
    target: { value: "25" },
  });
  fireEvent.change(screen.getByPlaceholderText(/ex: 170/i), {
    target: { value: "170" },
  });
  fireEvent.change(screen.getByPlaceholderText(/ex: 60/i), {
    target: { value: "70" },
  });
  fireEvent.click(screen.getByText(/Calculate!/i));

  // Wait for the result section to be displayed
  await waitFor(() => {
    const theText = screen.getAllByText(/The/i);
    const resultText = screen.getAllByText(/Result/i);

    theText.forEach((text) => expect(text).toBeInTheDocument());
    resultText.forEach((text) => expect(text).toBeInTheDocument());
  });

  // Check if BMI status is displayed
  const bmiStatusText = screen.getAllByText(/Your BMI Status/i);
  bmiStatusText.forEach((text) => expect(text).toBeInTheDocument());

  // Check if Calorie Needs, Protein Needs, and Fat Needs are displayed
  const calorieNeedsText = screen.getAllByText(/Calorie Needs/i);
  const proteinNeedsText = screen.getAllByText(/Protein Needs/i);
  const fatNeedsText = screen.getAllByText(/Fat Needs/i);

  calorieNeedsText.forEach((text) => expect(text).toBeInTheDocument());
  proteinNeedsText.forEach((text) => expect(text).toBeInTheDocument());
  fatNeedsText.forEach((text) => expect(text).toBeInTheDocument());
});
