import React from 'react'
import Image from 'next/image'

function HDIWsection() {
  return (
    <>
    <section className='HDIW-section'>
    <section class="hdiw-section">
  <div class="hdiw-left">
    <span className='small-label'>All in one solution</span>
    <h3>How does it work?</h3>
    <ul class="steps-list">
      <li>
      <div class="step">
        <div className="step-icons">
            <Image src='/images/number1-icon.svg' alt='step1 icon' width={48} height={48} className="number-icon" />
            <Image src='/images/down-arrow.svg' alt='down arrow icon' width={28} height={28} className="down-arrow-icon" />
        </div>
          <div class="step-content">
            <h5>Step 1</h5>
            <p>Step 1 description goes here</p>
          </div>
      </div>
      </li>
      <li>
      <div class="step">
        <div className="step-icons">
            <Image src='/images/number2-icon.svg' alt='step2 icon' width={48} height={48} className="number-icon" />
            <Image src='/images/down-arrow.svg' alt='down arrow icon' width={28} height={28} className="down-arrow-icon" />
        </div>
          <div class="step-content">
            <h5>Step 2</h5>
            <p>Step 2 description goes here</p>
          </div>
      </div>
      </li>
      <li>
      <div class="step">
        <div className="step-icons">
            <Image src='/images/number3-icon.svg' alt='step3 icon' width={48} height={48} className="number-icon" />
            <Image src='/images/down-arrow.svg' alt='down arrow icon' width={28} height={28} className="down-arrow-icon" />
        </div>
          <div class="step-content">
            <h5>Step 3</h5>
            <p>Step 3 description goes here</p>
          </div>
      </div>
      </li>
     
    </ul>
  </div>
  <div class="hdiw-right">
    <Image src='/images/howitworks.webp' alt='how it works image' width={1200} height={800} className="hdiw-img" />
  </div>
</section>


    </section>
    </>
  )
}

export default HDIWsection