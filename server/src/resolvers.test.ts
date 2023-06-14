import resolvers from "./resolvers";

describe('Query resolvers', () => {
    describe('coins', () => {
      it('should fetch and return coins data', async () => {
        const mockResponse = {
          data: [
            { name: 'Bitcoin' },
            { name: 'Ethereum' },
            { name: 'Tether' },
            { name: 'XRP' }
          ]
        };
  
        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValueOnce({
          json: () => Promise.resolve(mockResponse)
        } as any); 
  
        const data = await resolvers.Query.coins();
  
        expect(fetchSpy).toHaveBeenCalledWith('https://api.coinlore.net/api/tickers/');
        expect(data).toEqual(mockResponse.data);
  
        fetchSpy.mockRestore();
      });
  
      it('should handle fetch error', async () => {
        const fetchSpy = jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Network error'));
  
        await expect(resolvers.Query.coins()).rejects.toThrow('Network error');
        expect(fetchSpy).toHaveBeenCalledWith('https://api.coinlore.net/api/tickers/');
  
        fetchSpy.mockRestore();
      });
    });
  
    describe('coinMarket', () => {
      it('should fetch and return coin market data', async () => {
        const coinId = 90;
        const mockResponse = [
          { id: coinId, name: 'Bitcoin', marketCap: 1000000 },
          { id: 456, name: 'Ethereum', marketCap: 500000 }
        ];
  
        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValueOnce({
          json: () => Promise.resolve(mockResponse)
        } as any);
  
        const data = await resolvers.Query.coinMarket(null, { coinId });
  
        expect(fetchSpy).toHaveBeenCalledWith(`https://api.coinlore.net/api/coin/markets/?id=${coinId}`);
        expect(data).toEqual(mockResponse[0]);
  
        fetchSpy.mockRestore();
      });
  
      it('should handle fetch error', async () => {
        const coinId = 123;
        const fetchSpy = jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Network error'));
  
        await expect(resolvers.Query.coinMarket(null, { coinId })).rejects.toThrow('Network error');
        expect(fetchSpy).toHaveBeenCalledWith(`https://api.coinlore.net/api/coin/markets/?id=${coinId}`);
  
        fetchSpy.mockRestore();
      });
    });
  });
  