import { NextRequest, NextResponse } from 'next/server';

const ZEROX_API_URL = 'https://api.0x.org';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sellToken = searchParams.get('sellToken');
  const buyToken = searchParams.get('buyToken');
  const sellAmount = searchParams.get('sellAmount');

  if (!sellToken || !buyToken || !sellAmount) {
    return NextResponse.json(
      { error: 'Missing required parameters' },
      { status: 400 }
    );
  }

  const apiKey = process.env.ZEROX_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: '0x API key not configured' },
      { status: 500 }
    );
  }

  const params = new URLSearchParams({
    chainId: '1',
    sellToken,
    buyToken,
    sellAmount,
  });

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    '0x-api-key': apiKey,
    '0x-version': 'v2',
  };

  try {
    const response = await fetch(
      `${ZEROX_API_URL}/swap/permit2/price?${params.toString()}`,
      { headers }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.reason || data.message || 'Failed to fetch price' },
        { status: response.status }
      );
    }

    return NextResponse.json({
      sellToken: data.sellToken,
      buyToken: data.buyToken,
      sellAmount: data.sellAmount,
      buyAmount: data.buyAmount,
      price: data.buyAmount && data.sellAmount
        ? (parseFloat(data.buyAmount) / parseFloat(data.sellAmount)).toString()
        : '0',
      estimatedGas: data.gas || '0',
    });
  } catch (error) {
    console.error('Price API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch price' },
      { status: 500 }
    );
  }
}
