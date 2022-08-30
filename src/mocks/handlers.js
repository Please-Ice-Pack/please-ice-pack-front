import { rest } from 'msw';

import { ORDER_PACKING_STATUS } from '@constants/order/order';

const baseUrl = process.env.REACT_APP_API_URL;

export const handlers = [
  /**
   * 로그인 api mock response
   */
  rest.post(`${baseUrl}/v1/members/login`, async (req, res, ctx) => {
    const { identification, password } = await req.json();

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
  }),

  /**
   * 주문 포장 리스트 성공 mock response(Ai 검수 결과 일치)
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
            customerName: '컬리',
            trackingNumber: '1111-1111',
            orderDate: '2022-08-24T02:13:09',
          },
          packingInfo: {
            packingId: 73,
            isMatched: false,
          },
          orderDetails: [
            {
              productId: 2,
              productName: '씨제이)쁘티첼(요거젤리복숭아)',
              amount: 1,
              coldType: 'FROZEN',
              isMatched: false,
            },
            {
              productId: 10,
              productName: '돌코리아백도젤리90G',
              amount: 1,
              coldType: 'REFRIGERATED',
              isMatched: true,
            },
          ],
          recognitionResults: [
            {
              productId: 10,
              productName: '돌코리아백도젤리90G',
              amount: 1,
              coldType: 'REFRIGERATED',
            },
          ],
          recommendedPackingOption: {
            box: [
              {
                size: '1',
                amount: 1,
                type: 'POUCH',
                coldType: 'REFRIGERATED',
              },
              {
                size: '1',
                amount: 1,
                type: 'POUCH',
                coldType: 'FROZEN',
              },
            ],
            refrigerants: [
              {
                type: 'ICE_PACK',
                size: '1',
                amount: 1,
              },
              {
                type: 'DRY_ICE',
                size: '1',
                amount: 1,
              },
            ],
          },
        },
      }),
    ),
  ),

  /**
   * 주문 포장 리스트 성공 mock response(Ai 검수 결과 불일치)
   */
  rest.get(`${baseUrl}/v1/packings/orders/2`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        code: 'SUCCESS',
        message: '성공',
        data: {
          orderInfo: {
            orderId: 2,
            customerName: '고객 이름',
            trackingNumber: '222-2222',
            orderDate: '2022-08-22T13:32:53',
          },
          packingInfo: {
            packingId: 31,
            isMatched: true,
          },
          orderDetails: [
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
   * 주문 포장 리스트 실패(이미 처리된 주문) mock response
   */
  rest.get(`${baseUrl}/v1/packings/orders/3`, (req, res, ctx) =>
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
   * 주문 포장 리스트 실패(존재하지 않는 주문) mock response
   */
  rest.get(`${baseUrl}/v1/packings/orders/4`, (req, res, ctx) =>
    res(
      ctx.status(400),
      ctx.json({
        code: 'NOT_FOUND',
        message: '대상이 존재하지 않습니다.',
        data: null,
      }),
    ),
  ),

  /**
   * 주문 포장 상태 변경 mock response
   */
  rest.patch(`${baseUrl}/v1/packings/status/1`, async (req, res, ctx) => {
    const { status } = await req.json();
    switch (status) {
      case ORDER_PACKING_STATUS.PRE_PROGRESS:
        return res(
          ctx.status(200),
          ctx.json({
            code: 'SUCCESS',
            data: {
              employee: 0,
              isMatched: true,
              packingId: 0,
              status: 'PRE_PROGRESS',
            },
          }),
        );
      case ORDER_PACKING_STATUS.IN_PROGRESS:
        return res(
          ctx.status(200),
          ctx.json({
            code: 'SUCCESS',
            data: {
              employee: 0,
              isMatched: true,
              packingId: 0,
              status: 'IN_PROGRESS',
            },
          }),
        );
      case ORDER_PACKING_STATUS.DONE:
        return res(
          ctx.status(200),
          ctx.json({
            code: 'SUCCESS',
            data: {
              employee: 0,
              isMatched: true,
              packingId: 0,
              status: 'DONE',
            },
          }),
        );
      case ORDER_PACKING_STATUS.HOLD:
        return res(
          ctx.status(200),
          ctx.json({
            code: 'SUCCESS',
            data: {
              employee: 0,
              isMatched: true,
              packingId: 0,
              status: 'HOLD',
            },
          }),
        );
      default:
        return res(
          ctx.status(400),
          ctx.json({
            code: 'ERROR',
            message: '포장 상태 변경 요청 실패',
            data: null,
          }),
        );
    }
  }),

  /**
   * 주문 포장 상태 변경 mock response
   */
  rest.patch(`${baseUrl}/v1/packings/status/2`, async (req, res, ctx) => {
    const { status } = await req.json();
    switch (status) {
      case ORDER_PACKING_STATUS.PRE_PROGRESS:
        return res(
          ctx.status(200),
          ctx.json({
            code: 'SUCCESS',
            data: {
              employee: 0,
              isMatched: true,
              packingId: 0,
              status: 'PRE_PROGRESS',
            },
          }),
        );
      case ORDER_PACKING_STATUS.IN_PROGRESS:
        return res(
          ctx.status(200),
          ctx.json({
            code: 'SUCCESS',
            data: {
              employee: 0,
              isMatched: true,
              packingId: 0,
              status: 'IN_PROGRESS',
            },
          }),
        );
      case ORDER_PACKING_STATUS.DONE:
        return res(
          ctx.status(200),
          ctx.json({
            code: 'SUCCESS',
            data: {
              employee: 0,
              isMatched: true,
              packingId: 0,
              status: 'DONE',
            },
          }),
        );
      case ORDER_PACKING_STATUS.HOLD:
        return res(
          ctx.status(200),
          ctx.json({
            code: 'SUCCESS',
            data: {
              employee: 0,
              isMatched: true,
              packingId: 0,
              status: 'HOLD',
            },
          }),
        );
      default:
        return res(
          ctx.status(400),
          ctx.json({
            code: 'ERROR',
            message: '포장 상태 변경 요청 실패',
            data: null,
          }),
        );
    }
  }),
];
