// AUTO-GENERATED — mock for mapbox-gl (browser global)
const mockPopup = {
  setLngLat: jest.fn().mockReturnThis(),
  setHTML:   jest.fn().mockReturnThis(),
  addTo:     jest.fn().mockReturnThis(),
};
const mockMap = {
  on: jest.fn(), off: jest.fn(),
  addSource: jest.fn().mockReturnThis(),
  addLayer:  jest.fn().mockReturnThis(),
  removeLayer: jest.fn(), removeSource: jest.fn(),
  getLayer:    jest.fn().mockReturnValue(null),
  getSource:   jest.fn().mockReturnValue(null),
};
beforeEach(() => {
  jest.clearAllMocks();
  mockMap.getLayer.mockReturnValue(null);
  mockMap.getSource.mockReturnValue(null);
});
module.exports = {
  Map:   jest.fn().mockReturnValue(mockMap),
  Popup: jest.fn().mockReturnValue(mockPopup),
  accessToken: "",
};
