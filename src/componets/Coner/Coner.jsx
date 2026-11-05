import './coner.css';

export default function Coner() {
  return (
    <div>
          <section class="feedback">

        <h1>Feedback Corner</h1>

        <div class="feedback-container">

            <div class="feedback-card">
                <div class="quote">“</div>
                <h3>Emily Wilson</h3>
                <p>
                    The customer experience was exceptional
                    from start to finish. The website is
                    user-friendly, the checkout process was
                    smooth, and the clothes I ordered fit
                    perfectly. I'm beyond satisfied!
                </p>
            </div>

            <div class="feedback-card active">
                <div class="quote">“</div>
                <h3>Sarah Thompson</h3>
                <p>
                    I absolutely love the quality and style
                    of the clothing I purchased from this
                    website. customer service was outstanding,
                    and I received my order quickly.
                    Highly recommended!
                </p>
            </div>

            <div class="feedback-card">
                <div class="quote">“</div>
                <h3>Olivia Martinez</h3>
                <p>
                    I had a great experience shopping on
                    this website. The clothes I bought are
                    fashionable and comfortable.
                    Highly satisfied!
                </p>
            </div>

        </div>

        <div class="buttons">
            <button>&lsaquo;</button>
            <button>&rsaquo;</button>
        </div>

    </section>
    </div>
  )
}
