import Service from '@/service/Service';
import {Photo} from '@/model/photo';


class PhotoService extends Service {
  getPhotos() {
    return this.http.get<Photo[]>(
      `/posts`,
    );
  }

  getPhoto({id}: {id: number}) {
    return this.http.get<Photo>(
      `/posts/${id}`,
    );
  }
}

export default new PhotoService();
