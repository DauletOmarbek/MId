import { Injectable } from '@angular/core';
import {Post} from 'src/app/models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }



 getAll(): Post[] {
  return [
    {
    id:1,
    name:"Post1",
    imageUrl:"https://damion.top/uploads/posts/2021-12/1640277505_1-damion-club-p-krasivie-fotografii-prirodi-visokogo-kache-2.jpg",
    comment:"Post1",
    like:1,
    },
    {
      id:2,
      name:"Post2",
      imageUrl:"https://damion.top/uploads/posts/2021-12/1640277505_1-damion-club-p-krasivie-fotografii-prirodi-visokogo-kache-2.jpg",
      comment:"Post2",
      like:2,
    },
    {
      id:3,
      name:"Post3",
      imageUrl:"https://damion.top/uploads/posts/2021-12/1640277505_1-damion-club-p-krasivie-fotografii-prirodi-visokogo-kache-2.jpg",
      comment:"Post3",
      like:3,
    },
    {
      id:4,
      name:"Post4",
      imageUrl:"https://damion.top/uploads/posts/2021-12/1640277505_1-damion-club-p-krasivie-fotografii-prirodi-visokogo-kache-2.jpg",
      comment:"Post4",
      like:4,
    },
  ]
}
}
