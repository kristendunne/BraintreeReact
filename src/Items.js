export default function Items() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Items</h2>
        <div className="container">
<div className="row">
    <div className="col s6">
      <div className="card">
        <div className="card-image">
          <img src="https://res.cloudinary.com/dh7gi8p79/image/upload/v1643575370/zquurosbqpswmq9mqxhq.jpg" />
          <span className="card-title">Cafe Latte</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
        </div>
        <div className="card-content">
          <p>Espresso mixed with hot or steamed milk - heaven in a cup.</p>
        </div>
      </div>
    </div>
    <div className="col s6">
      <div className="card">
        <div className="card-image">
          <img src="https://res.cloudinary.com/dh7gi8p79/image/upload/v1643575380/fy0lzsxgqteheavnqyav.png" />
          <span className="card-title">Iced Coffee</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
        </div>
        <div className="card-content">
          <p>Coffee over ice - guaranteed to get you through any day.</p>
        </div>
      </div>
    </div>
  </div>
</div>
      </main>
    );
  }