import FavoriteRekompusIdb from '../data/favoriterekompus-idb';
import CONFIG from '../globals/config';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';
import NotificationHelper from './notification-helper';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, rekompus }) {
    this._likeButtonContainer = likeButtonContainer;
    this._rekompus = rekompus;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._rekompus;

    if (await this._isRekompusExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRekompusExist(id) {
    const rekompus = await FavoriteRekompusIdb.getRekompus(id);
    return !!rekompus;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRekompusIdb.putRekompus(this._rekompus);
      swal('Berhasil', 'Berhasil menambahkan kampus ke favorite', 'success').then(
        NotificationHelper.sendNotification({
          title: `${this._rekompus.name}`,
          options: {
            body: this._rekompus.description,
            image: `${CONFIG.BASE_IMAGE_URL}/${this._rekompus.pictureId}`,
          },
        }),
      );
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRekompusIdb.deleteRekompus(this._rekompus.id);
      swal('Berhasil', 'Berhasil menghapus kampus favorite', 'success').then(this._renderButton());
    });
  },
};

export default LikeButtonInitiator;
