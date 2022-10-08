class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connected?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections =connections;
  }
  turnOn(): void {
    console.log(`${this._brand}, ${this._size}, ${this._resolution}, ${this._connections}`);
  };

  get connected(): string | undefined {
    return this._connected;
  }

  set connected(value: string | undefined) {
    if (!value || this._connections.includes(value)) {
      this._connected = value;
      console.log(this._connected);
    } else {
      console.log('Sem conexão');
    }
  }
}

const tv1 = new Tv('LG', 72, '1920x1080', ['HDMI, Ethernet', 'Wifi']);

console.log(tv1);

tv1.connected = 'Wifi';
console.log('Connected to: ', tv1.connected);