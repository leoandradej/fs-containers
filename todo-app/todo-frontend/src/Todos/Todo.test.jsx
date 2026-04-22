import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Todo from "./Todo";

describe("Todo", () => {
  let mockDelete;
  let mockComplete;

  beforeEach(() => {
    mockDelete = vi.fn();
    mockComplete = vi.fn();
  });

  it("renders the todo text", () => {
    const todo = { text: "Write code", done: false };
    render(
      <Todo todo={todo} deleteTodo={mockDelete} completeTodo={mockComplete} />,
    );
    expect(screen.getByText("Write code")).toBeDefined();
  });

  it("shows Set as done button when todo is not done", () => {
    const todo = { text: "Write code", done: false };
    render(
      <Todo todo={todo} deleteTodo={mockDelete} completeTodo={mockComplete} />,
    );
    expect(screen.getByText("Set as done")).toBeDefined();
  });

  it("does not show Set as done button when todo is done", () => {
    const todo = { text: "Write code", done: true };
    render(
      <Todo todo={todo} deleteTodo={mockDelete} completeTodo={mockComplete} />,
    );
    expect(screen.queryByText("Set as done")).toBeNull();
  });
});
