import React from "react";
import Youtube from "../../svgs/icons/youtube";
import Instagram from "../../svgs/icons/instagram";
import Whatsapp from "../../svgs/icons/whatsapp";

export default function MemberCard({
  picture,
  alt,
  name,
  title,
  description,
  youtube,
  instagram,
  whatsapp,
}) {
  return (
    <div className="memberCard">
      <img src={picture} alt={alt} className="memberCard__picture" />
      <h3 className="memberCard__name">{name}</h3>
      <h5 className="memberCard__title">{title}</h5>
      <p className="memberCard__description">{description}</p>
      {(youtube || instagram || whatsapp) && (
        <div className="memberCard__links">
          {youtube && (
            <a
              href={youtube}
              className="socialMediaIcon socialMediaIcon--medium socialMediaIcon--primaryLight"
            >
              <Youtube />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              className="socialMediaIcon socialMediaIcon--medium socialMediaIcon--primaryLight"
            >
              <Instagram />
            </a>
          )}
          {whatsapp && (
            <a
              href={whatsapp}
              className="socialMediaIcon socialMediaIcon--medium socialMediaIcon--primaryLight"
            >
              <Whatsapp />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
