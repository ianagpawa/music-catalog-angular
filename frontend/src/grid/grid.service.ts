import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable()
export class GridService {
    constructor(
        private ApiService: ApiService
    ) { }

    getAllMockPlaylists() {
        return this.ApiService.getAllMockPlaylists();
    }

    getAllMockSongs() {
        return this.ApiService.getAllMockSongs();
    }
}