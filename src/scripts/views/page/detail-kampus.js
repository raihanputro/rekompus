// import UrlParser from '../../routes/url-parser';
// import { createKampusDetailTemplate } from '../templates/template-creator';

const DetailKampus = {
  async render() {
    return `
    <section id="detail-kampus" class="row">
      <div class="col-md-8 mt-2">
        <div class="card bg-info border-orange">
          <div class="card-header alert-info text-center">
            <div class="d-flex scroll-x">
              <span><a href="/#/kampus/id#info-kampus" class="text-muted fw-bold" id="scrollKampus">Info Kampus</a></span>
              <span><a href="/#/kampus/id#prodi-tersedia" class="text-muted fw-bold" id="scrollProdi">Program Studi Tersedia</a></span>
              <span><a href="/#/kampus/id#info-pendaftaran" class="text-muted fw-bold" id="scrollPendaftaran">Info Pendaftaran</a></span>              
            </div>

          </div>
          <div class="card-body bg-light br row m-2">
            <h4 class="text-center mb-2"><u>Kelas Tersedia</u></h4>
            <div class="col-md-12 mb-4 d-flex p-3 alert-info scroll-x">
              <span class="text-muted">Reguler</span>
              <span class="text-muted">Karyawan</span>
              <span class="text-muted">Umum</span>
              <span class="text-muted">Online</span>
            </div>
            <h4 class="text-center mb-2"><u>Tentang Kampus</u></h4>
            <div class="col-md-12 mb-4 d-flex justify-content-around alert-info p-3" id="info-kampus">
              <div class="row">
                <div class="col-md-12">
                  <p class="desc-kampus">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusamus dolores, vitae ullam
                    necessitatibus perspiciatis atque dignissimos ut magni esse corrupti laborum quasi ipsa quisquam
                    sunt beatae veritatis porro a dolore et rem assumenda dicta. Sint ab accusantium saepe
                    exercitationem porro! Voluptatibus asperiores, itaque placeat consectetur laborum iusto est
                    consequuntur.
                </div>
                <div class="col-md-6 mt-2">
                  <div class="group-text d-flex">
                    <h6 class="text-heading">Tahun Berdiri</h6>
                    <span class="text-muted ms-auto">1999</span>
                  </div>
                  <div class="group-text d-flex">
                    <h6 class="text-heading">No Telepon</h6>
                    <span class="text-muted ms-auto">08123456789</span>
                  </div>
                  <div class="group-text d-flex">
                    <h6 class="text-heading">Email</h6>
                    <span class="text-muted ms-auto">kampus@ac.id</span>
                  </div>
                  <div class="group-text d-flex">
                    <h6 class="text-heading">Alamat</h6>
                    <span class="text-muted ms-auto" style="text-align: right;">Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Enim, magni harum dolorem expedita earum eius magnam neque porro sed eligendi
                      dolor vero sequi rem, iusto ex est sapiente quo libero.</span>
                  </div>
                </div>
                <div class="col-md-6 mt-2">
                  <div class="group-text">
                    <h6 class="text-heading">Website</h6>
                    <p class="text-muted"><a href="https://universitas.ac.id">https://universitas.ac.id</a></p>
                  </div>
                  <div class="group-text">
                    <h6 class="text-heading">Media Sosial</h6>
                    <a href="www.facebook.com"><i class="fab fa-facebook-square fa-2x" aria-hidden="true"></i></a>
                    <a href="www.twitter.com"><i class="fab fa-twitter-square fa-2x" aria-hidden="true"></i></a>
                    <a href="www.instagram.com"><i class="fab fa-instagram-square fa-2x" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <h4 class="text-center mb-2"><u>Program Studi Tersedia</u></h4>
            <div class="col-md-12 mb-4 alert-info p-3" id="prodi-tersedia">
              <div class="row">
                <div class="col-md-6">
                  <div class="input-group mb-2">
                    <div class="input-group-text">
                      <i class="fas fa-magnifying-glass"></i>
                    </div>
                    <input type="search" class="form-control" id="prodiField" placeholder="Masukkan Program Studi">
                  </div>
                </div>
                <div class="col-md-6 mt-2">
                  <h5>5 dari 12 program studi ditampilkan</h5>
                </div>
                <div class="col-md-12">
                  <div class="row border-orange">
                    <div class="col-md-12">
                      <div class="card border-orange mt-2 mb-2">
                        <div class="card-body d-flex m-0" id="prodi-tersedia">
                          <div class="group-text mr-2">
                            <h5 class="text-heading">S1 - Pariwisata</h5>
                            <span class="alert alert-info p-1">Akreditasi: A</span>
                          </div>
                          <div class="group-text ms-auto">
                            <p class="text-muted">Biaya SPP</p>
                            <h6 class="text-heading">Rp. 11.250.000</h6>
                          </div>
                        </div>
                        <div class="card-footer bg-primary">
                          <a href="/#/kampus-rekomendasi/id">
                            <button class="btn btn-primary fw-bold w-100">Detail</button>
                          </a>
                        </div>
                      </div>
                      <div class="card border-orange mt-2 mb-2">
                        <div class="card-body d-flex m-0">
                          <div class="group-text">
                            <h5 class="text-heading">S1 - Pariwisata</h5>
                            <span class="alert alert-info p-1">Akreditasi: A</span>
                          </div>
                          <div class="group-text ms-auto">
                            <p class="text-muted">Biaya SPP</p>
                            <h6 class="text-heading">Rp. 11.250.000</h6>
                          </div>
                        </div>
                        <div class="card-footer bg-primary">
                          <a href="/#/kampus-rekomendasi/id">
                            <button class="btn btn-primary fw-bold w-100">Detail</button>
                          </a>
                        </div>
                      </div>
                      <div class="card border-orange mt-2 mb-2">
                        <div class="card-body d-flex m-0">
                          <div class="group-text">
                            <h5 class="text-heading">S1 - Pariwisata</h5>
                            <span class="alert alert-info p-1">Akreditasi: A</span>
                          </div>
                          <div class="group-text ms-auto">
                            <p class="text-muted">Biaya SPP</p>
                            <h6 class="text-heading">Rp. 11.250.000</h6>
                          </div>
                        </div>
                        <div class="card-footer bg-primary">
                          <a href="/#/kampus-rekomendasi/id">
                            <button class="btn btn-primary fw-bold w-100">Detail</button>
                          </a>
                        </div>
                      </div>
                      <div class="card border-orange mt-2 mb-2">
                        <div class="card-body d-flex m-0">
                          <div class="group-text">
                            <h5 class="text-heading">S1 - Pariwisata</h5>
                            <span class="alert alert-info p-1">Akreditasi: A</span>
                          </div>
                          <div class="group-text ms-auto">
                            <p class="text-muted">Biaya SPP</p>
                            <h6 class="text-heading">Rp. 11.250.000</h6>
                          </div>
                        </div>
                        <div class="card-footer bg-primary">
                          <a href="/#/kampus-rekomendasi/id">
                            <button class="btn btn-primary fw-bold w-100">Detail</button>
                          </a>
                        </div>
                      </div>
                      <div class="card border-orange mt-2 mb-2">
                        <div class="card-body d-flex m-0">
                          <div class="group-text">
                            <h5 class="text-heading">S1 - Pariwisata</h5>
                            <span class="alert alert-info p-1">Akreditasi: A</span>
                          </div>
                          <div class="group-text ms-auto">
                            <p class="text-muted">Biaya SPP</p>
                            <h6 class="text-heading">Rp. 11.250.000</h6>
                          </div>
                        </div>
                        <div class="card-footer bg-primary">
                          <a href="/#/kampus-rekomendasi/id">
                            <button class="btn btn-primary fw-bold w-100">Detail</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav aria-label="Page navigation example mb-2">
                    <ul class="pagination pagination-md justify-content-center mt-2">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">Previous</span>
                        </a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>

                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <h4 class="text-center mb-2">Form Review</h4>
            <hr>
            <form id="postReview">
              <input type="hidden" id="txtId" value=":id">
              <label for="txtName">Nama anda :</label>
              <br>
              <input type="text" id="txtNama" placeholder="Masukkan nama anda..." class="form-control mb-2" value="user" readonly>
              <label for="txtReview">Review anda :</label>
              <textarea id="txtReview" placeholder="Masukkan review anda..." class="form-control mb-2"></textarea>
              <button type="submit" class="btn btn-primary">Post</button>
              <hr>
            </form>
            
            <br>
            <h4 class="text-center mb-2">User Reviews</h4>
            <hr>
            <div class="container-reviews">
              <h5>Name</h5>
              <p class="text-muted">Review</p>
              <p class="text-primary">Date</p>
              <hr>
              <h5>Name</h5>
              <p class="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum, repellat asperiores hic veniam aliquam reiciendis natus consequatur magnam eveniet facere cumque fugit doloribus quod! Dicta esse aliquam rerum, alias eveniet tenetur, blanditiis quisquam eum voluptatem quos saepe fuga placeat, corrupti voluptas tempore! Rem, temporibus illum doloremque dicta accusamus quibusdam perferendis pariatur magni a unde numquam suscipit iste ab quaerat nulla ducimus, reprehenderit quam necessitatibus inventore obcaecati. Aliquam et voluptas perspiciatis iste commodi cupiditate doloribus odio mollitia, delectus id, reprehenderit nemo enim fuga assumenda, numquam voluptatum nobis unde doloremque minima fugit autem porro dicta. Magnam, aliquam reiciendis? Tempore, quos aliquam?</p>
              <p class="text-primary">Date</p>
              <hr>
              <h5>Name</h5>
              <p class="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum, repellat asperiores hic veniam aliquam reiciendis natus consequatur magnam eveniet facere cumque fugit doloribus quod! Dicta esse aliquam rerum</p>
              <p class="text-primary">Date</p>
              <hr>
              <h5>Name</h5>
              <p class="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum, repellat asperiores hic veniam aliquam reiciendis natus consequatur magnam eveniet facere cumque fugit doloribus quod! Dicta esse aliquam rerum</p>
              <p class="text-primary">Date</p>
              <hr>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-2">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-orange">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <img src="./favicon.png" alt="" class="thumb-img-detail">
                  </div>
                  <div class="col-md-8">
                    <div class="row">
                      <div class="col-md-12">
                        <h5 class="text-heading">Nama Universitas</h5> 
                      </div>
                      <div class="col-md-12 mb-2">
                        <span class="alert alert-info p-1">Akreditasi: A</span>
                        <span class="alert alert-info p-1">PTS</span>
                      </div>
                      <div class="col-md-12 mt-2 mb-2">
                        <span class="alert alert-success p-1">Dibuka</span>
                        <span class="alert alert-warning p-1">Ditutup</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <a href="/#/">
                    <button class="btn btn-primary w-100 mt-1 mb-1 p-2"><i class="fab fa-wpforms fa-xl"></i> Link Pendaftaran</button></a>
                  </div>
                  <div class="col-md-12">
                    <a href="/#/">
                    <button class="btn btn-success w-100 mt-1 mb-1 p-2"><i class="fab fa-whatsapp fa-xl" aria-hidden="true"></i> Tanya via WhatsApp</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mt-3 mb-3">
            <div class="card border-orange">
              <div class="card-header bb-orange"><h4 class="text-heading text-center text-muted">Galeri</h4></div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4 mt-2 mb-2">
                    <img src="./favicon.png" alt="" class="thumb-gallery">
                  </div>
                  <div class="col-md-4 mt-2 mb-2">
                    <img src="./favicon.png" alt="" class="thumb-gallery">
                  </div>
                  <div class="col-md-4 mt-2 mb-2">
                    <img src="./favicon.png" alt="" class="thumb-gallery">
                  </div>
                </div>
              </div>
              <div class="card-footer bg-primary">
                <a href="/#/gallery/id">
                  <button class="btn btn-primary fw-bold w-100 fs-5 fw-bold">Detail</button>
                </a>
              </div>
            </div>
          </div> 
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card border-orange">
              <div class="card-header bb-orange">
                <h4 class="text-heading text-muted text-center">Info Pendaftaran</h4>
              </div>
              <div class="card-body" id="info-pendaftaran">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card border-orange mt-2 mb-2">
                      <div class="card-header text-muted text-center bb-orange">
                        Tanggal Pendaftaran 1 Jun 2022 - 10 Agustus 2022
                      </div>
                      <div class="card-body d-flex m-2">
                        <div class="group-text">
                          <h6 class="text-muted">S1</h6>
                          <h6>S1 Reguler Beasiswa Bebas Uang Pangkal</h6>
                        </div>
                        <div class="group-text ms-auto">
                          <p class="text-muted">Biaya SPP</p>
                          <h6 class="text-heading">Rp. 11.250.000</h6>
                        </div>
                      </div>
                      <div class="card-footer bg-primary">
                        <a href="/#/kampus-rekomendasi/id">
                          <button class="btn btn-primary fw-bold w-100">Daftar</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="card border-orange mt-2 mb-2">
                      <div class="card-header text-muted text-center bb-orange">
                        Tanggal Pendaftaran 1 Jun 2022 - 10 Agustus 2022
                      </div>
                      <div class="card-body d-flex m-2">
                        <div class="group-text">
                          <h6 class="text-muted">S1</h6>
                          <h6>S1 Reguler Beasiswa Bebas Uang Pangkal</h6>
                        </div>
                        <div class="group-text ms-auto">
                          <p class="text-muted">Biaya SPP</p>
                          <h6 class="text-heading">Rp. 11.250.000</h6>
                        </div>
                      </div>
                      <div class="card-footer bg-primary">
                        <a href="/#/kampus-rekomendasi/id">
                          <button class="btn btn-primary fw-bold w-100">Daftar</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="card border-orange mt-2 mb-2">
                      <div class="card-header text-muted text-center bb-orange">
                        Tanggal Pendaftaran 1 Jun 2022 - 10 Agustus 2022
                      </div>
                      <div class="card-body d-flex m-2">
                        <div class="group-text">
                          <h6 class="text-muted">S1</h6>
                          <h6>S1 Reguler Beasiswa Bebas Uang Pangkal</h6>
                        </div>
                        <div class="group-text ms-auto">
                          <p class="text-muted">Biaya SPP</p>
                          <h6 class="text-heading">Rp. 11.250.000</h6>
                        </div>
                      </div>
                      <div class="card-footer bg-primary">
                        <a href="/#/kampus-rekomendasi/id">
                          <button class="btn btn-primary fw-bold w-100">Daftar</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="card border-orange mt-2 mb-2">
                      <div class="card-header text-muted text-center bb-orange">
                        Tanggal Pendaftaran 1 Jun 2022 - 10 Agustus 2022
                      </div>
                      <div class="card-body d-flex m-2">
                        <div class="group-text">
                          <h6 class="text-muted">S1</h6>
                          <h6>S1 Reguler Beasiswa Bebas Uang Pangkal</h6>
                        </div>
                        <div class="group-text ms-auto">
                          <p class="text-muted">Biaya SPP</p>
                          <h6 class="text-heading">Rp. 11.250.000</h6>
                        </div>
                      </div>
                      <div class="card-footer bg-primary">
                        <a href="/#/kampus-rekomendasi/id">
                          <button class="btn btn-primary fw-bold w-100">Daftar</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  },
  async afterRender() {
    // const url = UrlParser.parseActiveUrlWithoutCombiner();
    // const kampus = await KampusSource.detailKampus(url.id);
    // const kampusContainer = document.querySelector('#detail-kampus');
    // kampusContainer.innerHTML = createKampusDetailTemplate(kampus);

    const scrollKampus = document.getElementById('scrollKampus');
    const scrollProdi = document.getElementById('scrollProdi');
    const scrollPendaftaran = document.getElementById('scrollPendaftaran');

    const infoKampus = document.getElementById('info-kampus');
    const prodiTersedia = document.getElementById('prodi-tersedia');
    const infoPendaftaran = document.getElementById('info-pendaftaran');
    const containerReviews = document.querySelector('.container-reviews');

    scrollKampus.addEventListener('click', () => {
      window.scrollTo({ top: infoKampus.offsetTop - 20 });
    });
    scrollProdi.addEventListener('click', () => {
      window.scrollTo({ top: prodiTersedia.offsetTop - 20 });
    });
    scrollPendaftaran.addEventListener('click', () => {
      const mediaQueryLarge = window.matchMedia('(min-width: 760px)');
      const checkMedia = mediaQueryLarge.matches;
      if (checkMedia) {
        window.scrollTo({ top: infoPendaftaran.offsetTop + 80 });
      } else {
        window.scrollTo({
          top: (2 * containerReviews.offsetHeight) + 3600,
        });
      }
    });
  },
};

export default DetailKampus;
