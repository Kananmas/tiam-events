// Using Maplibre
import { Map, Marker } from 'pigeon-maps';

export function EventMap() {
  return (
    <div className='h-[180px] rounded-[25px] overflow-hidden mb-3 mt-2'>
      <Map
        height={220}
        defaultCenter={[50.879, 4.6997]}
        defaultZoom={11}
      >
        <Marker width={50} anchor={[50.879, 4.6997]} />
      </Map>
    </div>
  );
}