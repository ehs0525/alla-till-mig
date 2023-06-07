const FAKE_LOCATIONS = [
  {
    // 콩고민주공화국
    coords: {
      latitude: -3.37586,
      longitude: 28.56355,
    },
  },
  {
    // 남극 대륙
    coords: {
      latitude: -83.01443,
      longitude: 122.71765,
    },
  },
  {
    // 중국 후난성
    coords: {
      latitude: 27.43088,
      longitude: 111.00221,
    },
  },
  {
    // 필리핀 레이테
    coords: {
      latitude: 11.23086,
      longitude: 124.56497,
    },
  },
  {
    // 미국 알래스카
    coords: {
      latitude: 61.60483,
      longitude: -142.33586,
    },
  },
  {
    // 러시아 추코츠키 아브토놈니 자치구
    coords: {
      latitude: 63.83933,
      longitude: 174.51149,
    },
  },
  {
    // 미국 캘리포니아
    coords: {
      latitude: 38.86939,
      longitude: -121.07836,
    },
  },
  {
    // 러시아 사라토브스카야 주
    coords: {
      latitude: 51.58192,
      longitude: 47.68887,
    },
  },
  {
    // 캐나다 바일롯 섬
    coords: {
      latitude: 72.95888,
      longitude: -77.98078,
    },
  },
  {
    // 오스트레일리아 웨스턴오스트레일리아 주
    coords: {
      latitude: -32.97543,
      longitude: 115.93021,
    },
  },
];

export const getFakeLocation = () => {
  return FAKE_LOCATIONS[Math.floor(Math.random() * FAKE_LOCATIONS.length)];
};
