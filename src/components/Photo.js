import axios from "axios";
import React, { Component } from "react";
import downloadIcon from "./download.svg";
export default class Photo extends Component {
  state = {
    photo: [],
    loading: true,
  };

  componentDidMount() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let photo_id = params.get("id");

    axios
      .get(
        "https://api.unsplash.com/photos/" +
          photo_id +
          "/?client_id=R6TMlKwXQK-EvFlH2bl3KQqrC3_H57YZmJq8XzyrAsY"
      )
      .then((res) =>
        this.setState({
          photo: res.data,
          loading: false,
        })
      );
  }

  render() {
    console.log(this.state.photo);
    var photo = this.state.photo;
    return (
      <div>
        {photo.description ? (
          <h2 className="text-center">{photo.description}</h2>
        ) : (
          ""
        )}
        <div className="photo-single-wrapper">
          <div className="photo-single-info">
            <ul>
              <li>
                <label htmlFor="uplaodedd_by">Uploaded by</label>{" "}
                {photo.user && photo.user.first_name}{" "}
                {photo.user && photo.user.last_name}
              </li>

              {photo.updated_at ? (
                <li>
                  <label htmlFor="upload_date">Upload date</label>{" "}
                  {photo.updated_at}
                </li>
              ) : (
                ""
              )}

              <li>
                <label htmlFor="camera_model">Camera model</label>{" "}
                {photo.exif && photo.exif.model}
              </li>
            </ul>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={photo.links && photo.links.download}
              download
            >
              Download <img src={downloadIcon} alt="download" />
            </a>
          </div>
          <div className="photo-img-n">
            <img src={photo.urls && photo.urls.full} alt="" />{" "}
          </div>
        </div>
      </div>
    );
  }
}
