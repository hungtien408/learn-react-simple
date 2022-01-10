import React from 'react';
import AlbumList from './components/AlbumList';

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Nhà Nhà Nghe Gì?',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/d/a/7/9/da791871c6f665fcc7591a36592a8fc9.jpg',
    },
    {
      id: 2,
      name: 'Heartbreak Pop',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/b/8/6/0/b860bfc37f06d069cfc63c0e8c81eb11.jpg',
    },
    {
      id: 3,
      name: 'Rap Việt Thế Hệ Trẻ',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/6/5/5/4655a8df88b7c686efe8cd8c74418890.jpg',
    },
    {
      id: 4,
      name: 'Quý Cô Indie Việt',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/3/b/6/9/3b69f282f65d1c34bf18f71d5810df46.jpg',
    },
  ];

  return (
    <div>
      <h2>Lựa chọn hôm nay</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
