class MediasFactory {
    constructor(data, name) {
        if (data.image) {
          return new ImageMedia(data, name);
        } 
        // else if (data.video) {
        //   console.log('VIDEO');
        //     return new Photographer.createPhotographerVideo(data, name)
        // }
         else {
            throw 'Unknown type format'
        }
    }
  }







// class MediasFactory {
//   constructor(data, name) {
//       if (data.image) {
//         return new ImageMedia(data, name);
//       } 
//       // else if (data.video) {
//       //   console.log('VIDEO');
//       //     return new Photographer.createPhotographerVideo(data, name)
//       // }
//        else {
//           throw 'Unknown type format'
//       }
//   }
// }