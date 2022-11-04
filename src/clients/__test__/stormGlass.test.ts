import axios from 'axios';

import { StormGlass } from '@src/clients/stormGlass';

import stormglassWeatherPointFixture from '@test/fixtures/stormglass_weather_3_hours.json';
import stormglassNormalizedResponseFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StormGlass cliente', () => {
  it('should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.37737;
    const lng = 123.43344;

    axios.get = jest
      .fn()
      .mockResolvedValue({ data: stormglassWeatherPointFixture });

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);

    expect(response).toEqual(stormglassNormalizedResponseFixture);
  });
});
