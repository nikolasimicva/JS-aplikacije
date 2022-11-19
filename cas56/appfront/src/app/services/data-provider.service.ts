import { Injectable } from '@angular/core';

export interface Location {
  x: number;
  y: number;
}

export interface Municipality {
  _id: object;
  city: string;
  zip: string;
  loc: Location;
  pop: number;
  state: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private DATA: Municipality[] =
    [{
      "_id": {
        "$oid": "5c8eccc1caa187d17ca6f366"
      },
      "city": "LOS ANGELES",
      "zip": "90011",
      "loc": {
        "y": 34.007856,
        "x": 118.258189
      },
      "pop": 96074,
      "state": "CA"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca6f39d"
      },
      "city": "BELL GARDENS",
      "zip": "90201",
      "loc": {
        "y": 33.969177,
        "x": 118.17205
      },
      "pop": 99568,
      "state": "CA"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca6f3b7"
      },
      "city": "SOUTH GATE",
      "zip": "90280",
      "loc": {
        "y": 33.94617,
        "x": 118.201349
      },
      "pop": 87026,
      "state": "CA"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca6f3db"
      },
      "city": "NORWALK",
      "zip": "90650",
      "loc": {
        "y": 33.90564,
        "x": 118.081767
      },
      "pop": 94188,
      "state": "CA"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca6f423"
      },
      "city": "ARLETA",
      "zip": "91331",
      "loc": {
        "y": 34.258081,
        "x": 118.420692
      },
      "pop": 88114,
      "state": "CA"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca7043e"
      },
      "city": "CHICAGO",
      "zip": "60609",
      "loc": {
        "y": 41.809721,
        "x": 87.653279
      },
      "pop": 89762,
      "state": "IL"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca70447"
      },
      "city": "CHICAGO",
      "zip": "60617",
      "loc": {
        "y": 41.725743,
        "x": 87.556012
      },
      "pop": 98612,
      "state": "IL"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca70448"
      },
      "city": "CHICAGO",
      "zip": "60618",
      "loc": {
        "y": 41.946401,
        "x": 87.704214
      },
      "pop": 88377,
      "state": "IL"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca7044a"
      },
      "city": "CHICAGO",
      "zip": "60620",
      "loc": {
        "y": 41.741119,
        "x": 87.654251
      },
      "pop": 92005,
      "state": "IL"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca7044d"
      },
      "city": "CHICAGO",
      "zip": "60623",
      "loc": {
        "y": 41.849015,
        "x": 87.7157
      },
      "pop": 112047,
      "state": "IL"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca70454"
      },
      "city": "CHICAGO",
      "zip": "60629",
      "loc": {
        "y": 41.778149,
        "x": 87.706936
      },
      "pop": 91814,
      "state": "IL"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca70455"
      },
      "city": "CHICAGO",
      "zip": "60628",
      "loc": {
        "y": 41.693443,
        "x": 87.624277
      },
      "pop": 94317,
      "state": "IL"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca70466"
      },
      "city": "CHICAGO",
      "zip": "60647",
      "loc": {
        "y": 41.920903,
        "x": 87.704322
      },
      "pop": 95971,
      "state": "IL"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca72fa0"
      },
      "city": "NEW YORK",
      "zip": "10021",
      "loc": {
        "y": 40.768476,
        "x": 73.958805
      },
      "pop": 106564,
      "state": "NY"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca72fa5"
      },
      "city": "NEW YORK",
      "zip": "10025",
      "loc": {
        "y": 40.797466,
        "x": 73.968312
      },
      "pop": 100027,
      "state": "NY"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca72fd3"
      },
      "city": "BRONX",
      "zip": "10467",
      "loc": {
        "y": 40.873671,
        "x": 73.871242
      },
      "pop": 85710,
      "state": "NY"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca73072"
      },
      "city": "BROOKLYN",
      "zip": "11212",
      "loc": {
        "y": 40.662474,
        "x": 73.914483
      },
      "pop": 87079,
      "state": "NY"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca7307f"
      },
      "city": "BROOKLYN",
      "zip": "11226",
      "loc": {
        "y": 40.646694,
        "x": 73.956985
      },
      "pop": 111396,
      "state": "NY"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca730a1"
      },
      "city": "JACKSON HEIGHTS",
      "zip": "11373",
      "loc": {
        "y": 40.740388,
        "x": 73.878551
      },
      "pop": 88241,
      "state": "NY"
    }, {
      "_id": {
        "$oid": "5c8eccc1caa187d17ca730a4"
      },
      "city": "RIDGEWOOD",
      "zip": "11385",
      "loc": {
        "y": 40.703613,
        "x": 73.896122
      },
      "pop": 85732,
      "state": "NY"
    }];

  constructor() { }

  getAllMunicipalities() {
    return this.DATA;
  }

}
