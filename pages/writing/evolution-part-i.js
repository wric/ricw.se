import Layout from '../../components/layout'

export const title = 'Evolution Part I: Introduction'

export default function EvolutionPartI() {
  return (
    <Layout title="Evolution Part I">
      <h1>{title}</h1>

      <p>
        I started drinking coffee at a young age. At the age of six I took my
        parents last sip of coffee, filled the already milky coffee with even
        more milk and enjoyed it. I can still remember being in the kitchen,
        sitting at my stool at the bar table enjoying a Swedish afternoon{' '}
        <em>fika</em>. The coffee was made from a mocca pot on the stovetop, the
        milk heated on the after burn and then made fluffy with a milk frother.
      </p>

      <p>
        Fast forward a couple of years to when I was studying at the university.
        From somewhere I realized that an espresso machine was something I
        needed. The googling began and after monitoring the second-hand market
        for a while I found a promising deal. The trip was a few minutes outside
        the city where a gentleman sold a Gaggia Classic and a Gaggia Coffee for
        the total price of 1000 SEK (100-110 €). Neither of them was functional,
        but the gentleman said that he honestly thought that a bit of descaling
        would do the trick. He was indeed correct. New gaskets and a few hours
        of cleaning and they worked again. I sold the working Gaggia Coffee for
        1000 SEK and kept the Gaggia Classic. 1000 SEK for a newly restored
        Gaggia Coffee is a good deal and it resulted in that the Gaggia Classic
        only cost me the price of the gaskets and some cleaning utilities. The
        Classic was manufactured May 2002 and still works almost 19 years later
        as my daily driver. I find great joy in using machines that has a simple
        and durable design that even I can grasp.
      </p>

      <p>
        During the 2020 year of Covid-19 pandemic my interest in coffee has
        found new fuel. I was looking for a Halloween costume when I saw a cheap
        plastic Gaggia machine at a second-hand store. It was sold as a complete
        unit for 375 SEK (35-40 €) and I figured the portafilter alone was worth
        the price. The restoration project was the icing on the cake. The lady
        in the store told me I would get it for 300 SEK as she was not sure if
        it was possible to get it running. This being a cheaper and even simpler
        machine than both the Coffee and the Classic I was confident in fixing
        it. The lady preferred cash and to my surprise I found 280 SEK in cash
        in my wallet and she accepted it as payment.
      </p>

      <p>
        A project started to evolve in my mind. It started as a simple project
        but a lot of challenges and unknows appeared along the way. The original
        premise consisted of:
      </p>

      <ol>
        <li>Make the machine operational</li>
        <li>Control the machine with a Raspberry Pi</li>
        <ul>
          <li>PID</li>
          <li>GUI</li>
          <li>Pre-infusion</li>
        </ul>
        <li>Create custom chassi to the machine</li>
      </ol>

      <p>Simple enough...</p>
      <p>
        In a series of posts I will document the journey of how I bring this
        abandoned espresso machine into something unique and useful.
      </p>
    </Layout>
  )
}
