import { DefaultRequestBody, rest } from "msw";

const mockComments: CommentData[] = [
  { id: 1, name: "Comment 1" },
  { id: 2, name: "Comment 2" },
  { id: 3, name: "Comment 3" },
];

export const handlers = [
  rest.get<DefaultRequestBody, CommentData[]>(
    "https://jsonplaceholder.typicode.com/comments",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockComments));
    }
  ),
];
