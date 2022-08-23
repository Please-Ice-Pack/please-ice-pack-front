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

  /**
   * 주문 패킹 리스트 성공 mock response
   */
  rest.get(`${baseUrl}/v1/packings/orders/1`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        code: 'SUCCESS',
        message: '성공',
        data: {
          orderInfo: {
            orderId: 1,
            customerName: '고객 이름',
            trackingNumber: '1111-1111',
            orderDate: '2022-08-22T13:32:53',
          },
          packingInfo: {
            packingId: 1,
            isMatched: true,
          },
          orderDetails: [
            {
              productId: 1,
              productName: '상품1',
              amount: 1,
              coldType: 'NORMAL',
            },
            {
              productId: 2,
              productName: '상품2',
              amount: 1,
              coldType: 'REFRIGERATED',
            },
          ],
          recognitionResults: [
            {
              productId: 1,
              productName: '상품1',
              amount: 1,
              coldType: 'NORMAL',
              isMatched: true,
            },
            {
              productId: 2,
              productName: '상품2',
              amount: 1,
              coldType: 'REFRIGERATED',
              isMatched: true,
            },
          ],
          recommendedPackingOption: {
            box: {
              size: '13호',
              amount: 1,
            },
            refrigerants: [
              {
                type: 'DRY_ICE',
                size: '중',
                amount: 1,
              },
              {
                type: 'ICE_PACK',
                size: null,
                amount: 1,
              },
            ],
          },
        },
      }),
    ),
  ),

  /**
   * 주문 패킹 리스트 실패(이미 처리된 주문) mock response
   */
  rest.get(`${baseUrl}/v1/packings/orders/2`, (req, res, ctx) =>
    res(
      ctx.status(400),
      ctx.json({
        code: 'NOT_PRE_PROGRESS_STATUS',
        message: '해당 주문건은 이미 처리중입니다.',
        data: null,
      }),
    ),
  ),

  /**
   * 주문 패킹 리스트 실패(존재하지 않는 주문) mock response
   */
  rest.get(`${baseUrl}/v1/packings/orders/3`, (req, res, ctx) =>
    res(
      ctx.status(400),
      ctx.json({
        code: 'NOT_FOUND',
        message: '대상이 존재하지 않습니다.',
        data: null,
      }),
    ),
  ),
];
