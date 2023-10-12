import YoutubeEmbed from "../embeddedVideo/YoutubeEmbed";

function CardBinario(props) {
  return             <div className="col-md-4 mb-5">
  <div className="card h-100">
      <YoutubeEmbed embedId={props.youtubeID} />
    <div className="card-body">
      <p className="card-text">
        {props.cardText}
      </p>
    </div>
    <div className="card-footer">
      <a
        target="_blank"
        className="btn btn-primary btn-sm"
        rel="noopener noreferrer"
        href={props.youtubeLink}
      >
        Guarda su Youtube
      </a>
    </div>
  </div>
</div>
;
}
export default CardBinario;
