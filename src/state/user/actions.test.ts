import { isFSA } from 'flux-standard-action';
import {
  endDataFetch,
  fetchData,
  podData,
  saveData,
  startDataFetch,
} from './actions';

describe('user actions', () => {
  describe('endDataFetch', () => {
    it('returns a standard action', () => {
      expect(isFSA(endDataFetch())).toBe(true);
    });
  });

  describe('endDataFetch', () => {
    it('returns a standard action', () => {
      expect(isFSA(startDataFetch())).toBe(true);
    });
  });

  describe('saveData', () => {
    it('returns a standard action', () => {
      expect(isFSA(saveData())).toBe(true);
    });
  });

  describe('fetchData', () => {
    describe('when sucesfully dispatched', () => {
      it('fetchs data from manifest.json', async () => {
        const data = {
          updated: 'somedate',
          dates: [],
        };

        const fetchSpy = jest.fn(() =>
          Promise.resolve({
            ...data,
          }),
        );

        const dispatchSpy = jest.fn();

        // await fetchData(dispatchSpy, undefined, fetchSpy);

        // expect(fetchSpy).toHaveBeenCalledWith(podData);
      });
    });
  });
});

// it('dispatches ip address from endpoint', async () => {
//   const ipAddressResponse = { ipAddress: '1.1.1.1' };

//   const requestSpy = jest.fn(() => Promise.resolve(ipAddressResponse));

//   const dispatchSpy = jest.fn();

//   await fetchIpAddress(dispatchSpy, requestSpy);

//   expect(requestSpy).toHaveBeenCalledWith(
//     '/api/ob-logon-authentication/proxy/open-banking/logon-authentication/v1/client-ip',
//     {
//       method: 'get',
//     },
//   );

//   expect(dispatchSpy).toHaveBeenCalledWith(
//     saveUserIp({ ipAddress: '1.1.1.1' }),
//   );
// });
