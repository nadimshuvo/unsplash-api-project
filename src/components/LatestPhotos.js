import axios from "axios";
import React, { Component } from "react";

export default class LatestPhotos extends Component {
  state = {
    photos: [],
    page: 1,
    loading: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=R6TMlKwXQK-EvFlH2bl3KQqrC3_H57YZmJq8XzyrAsY&per_page=16&page=" +
          this.state.page
      )
      .then((res) =>
        this.setState({
          photos: res.data,
          page: this.state.page + 1,
          loading: false,
        })
      );
  }

  loadNextPage = (e) => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=R6TMlKwXQK-EvFlH2bl3KQqrC3_H57YZmJq8XzyrAsY&per_page=16&page=" +
          this.state.page
      )
      .then((res) =>
        this.setState({
          photos: res.data,
          loading: false,
          page: this.state.page + 1,
        })
      );
    window.scrollTo(0, 0);
  };

  render() {
    console.log(this.state.photos);

    return (
      <React.Fragment>
        {this.state.loading ? (
          <div className="loading-bar col text-center">Loading Photos</div>
        ) : (
          this.state.photos.map((photo) => (
            <div className="col-lg-3" key={photo.id}>
              <div className="single-photo-item">
                <a href="/" className="d-block">
                  <div className="image-wrapper">
                    <img src={photo.urls.small} alt={photo.description} />
                  </div>
                  <h5>{photo.description}</h5>
                  <p className="cat-name">
                    by - {photo.user.first_name} {photo.user.last_name}
                  </p>
                </a>
              </div>
            </div>
          ))
        )}

        <div className="col-lg-12">
          <div className="load-more-btn">
            <button onClick={this.loadNextPage}>
              load Page {this.state.page}
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
