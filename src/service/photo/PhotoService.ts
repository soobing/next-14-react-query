import Service from '@/service/Service';
import {Photo} from '@/model/photo';

class PhotoService extends Service {
  getPhotos() {
    return this.http.get<Photo[]>(
      `/photos`,
    );
  }

  getPhoto(photoId: number) {
    return this.http.get<Photo>(
      `/photo/${photoId}`,
    );
  }

  getComments(photoId: number) {
    return this.http.get<Comment[]>(
      `/photo/${photoId}/comments`,
    );
  }

  getComment({photoId, commentId}: {photoId: number, commentId: number}) {
    return this.http.get<Comment[]>(
      `/photo/${photoId}/comments/${commentId}`,
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PhotoService();
