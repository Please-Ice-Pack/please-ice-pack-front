import { rest } from 'msw';

const baseUrl = process.env.REACT_APP_API_URL;

export const handlers = [
  /**
   * 로그인 api mock response
   */
  rest.post(`${baseUrl}/v1/members/login`, (req, res, ctx) => {
    req.json().then(payload => {
      const { identification, password } = payload;

      /**
       * 아이디와 비밀번호가 맞지 않으면 에러 응답
       */
      if (identification !== 'testId' || password !== 'testPassword') {
        return res(
          ctx.status(400),
          ctx.json({
            code: 'NOT_FOUND',
            message: '로그인 실패!!!',
          }),
        );
      }

      /**
       * 아이디 비밀번호가 일치할 시 로그인 성공 응답
       */
      return res(
        ctx.status(200),
        ctx.json({
          code: 'SUCCESS',
          message: '로그인 성공!!',
          data: {
            accessToken:
              'eyJ0eXAiOiJKV1sdasdADAsdasd.asdasfasfasd.asdasdasdasd-asdasdAWweWRQWEQDSAD',
          },
        }),
      );
    });
  }),
];
