import './style.css'

export function CardPlansComponents(props) {
    return (
            <div id='card' class="card">
                <div class="card-body">
                    <div className="text-center">
                        <h5 id="card-title" class="card-title">{props.titleCard}</h5>
                        <h6 id="card-subtitle" class="card-subtitle mb-2 text-muted">{props.subtitleCard}</h6>
                    </div>
                    <h2 className="price-h2"><span className="price-span">$49</span>/mo</h2>
                    <p>Benefits:</p>
                    <ul>
                        <li> Lorem ipsum </li>
                        <li> Lorem ipsum </li>
                        <li> Lorem ipsum </li>
                        <li> Lorem ipsum </li>
                    </ul>
                    <div className="button-container">
                        <button className="btn btn-primary button-get-started" type="submit">Start 30 days free trial</button>
                    </div>
                </div>
            </div>
    );
}