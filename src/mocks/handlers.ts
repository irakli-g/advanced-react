import { DefaultRequestBody, rest } from "msw";
import { mockComments } from "./data";

export const handlers = [
  rest.get<DefaultRequestBody, CommentData[]>(
    "https://jsonplaceholder.typicode.com/comments",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockComments));
    }
  ),
];
