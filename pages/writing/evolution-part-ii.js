import Image from 'next/image'
import Layout from '../../components/layout'

export const title = 'Evolution Part II: Gaggia Evolution'

export default function EvolutionPartII() {
  return (
    <Layout title="Evolution Part II">
      <h1>{title}</h1>

      <p>
        In this post I will discuss the starting ground of this project: the
        Gaggia Evolution. When first seeing the Evolution one can tell that is
        abudget machine. It looks and feels plastic. The chassis is fully made
        of plastic and I am not sure if it is the age showing, but it does not
        feel rigid at all. The contrast to the build quality of my Gaggia
        Classic tank is huge. The entire chassis moves when I place my hand on
        the top and every part is just clunky, aged plastic. But, on the inside
        it is the same boiler and pump that Gaggia uses in many of their
        consumer products, including the Classic. This means that there are good
        hopes of actually turning this piece of plastic crap into something
        actually delightful.
      </p>

      <figure>
        <Image
          src="/part-ii-evolution.JPEG"
          alt="Everything included"
          width={1536}
          height={2048}
        />
        <figcaption>Everything included except tray mesh.</figcaption>
      </figure>

      <p>
        Above is the beauty the day after I bought it. The only thing missing
        when purchased was the drip tray mesh. The pump and boiler worked great,
        but it was a lot of leakage around the gask head and the water coming
        out was nothing I would put in my body. The steam also worked as
        expected, but the wand itself was nasty with old uncleaned milk all over
        it. When attaching my gauge to the portafilter I got a stunning 16 bar
        of pressure. Damn does Ulka pumps are over-powered! Not to my surprised
        Evolution does not have a solenoid valve like my Classic. This means
        that I will not be able to adjust the pump pressure without extra
        modifications. My first thought was to control the power to the pump
        with a solid-state relay to get it down to 8-9 bar and being able to
        lower it even further to achieve pre-infusion. But more on this later.
      </p>

      <figure>
        <Image
          src="/part-ii-portafilter.JPEG"
          alt="Portafilter"
          width={1536}
          height={2048}
        />
        <figcaption>Portafilter with cracked plastic sprout.</figcaption>
      </figure>

      <p>
        The portafilter included with the machine is the default Gaggia
        portafilter that also comes with the Classic (and my older Coffee). The
        only difference is that this one had a plastic sprout. The sprout also
        had a crack close to the threads that made it a bit wonky. I decided
        early to get rid of the sprout and drill the bottom of the portafilter
        and use it as a naked one. Unfortunately, I forgot to picture that
        process, but I just bought a hole saw made for metal and got rid of the
        bottom. The hole got a bit unaligned to the center and I need to finish
        up some rough edges, but it does the job. The portafilter mod was simple
        but I will probably buy a real naked portafilter in the future. My main
        grip with the modified original is that the height of the portafilter
        covers the view of the filter basket's bottom. The inaccessibility of
        seeing the naked bottom while brewing somewhat ruins the point.
      </p>

      <figure>
        <Image
          src="/part-ii-inside.JPEG"
          alt="Simple inside"
          width={1536}
          height={2048}
        />
        <figcaption>Simple and clean inside.</figcaption>
      </figure>

      <p>
        The inside is simple and there are absolutely no whistles and bells
        inhere. I found the parts list and electrical scheme by googling and the
        both confirmed the simplicity. As you can see, it was really clean on
        the inside and the only thing I needed to replace was the silicone
        tubing between the water tank and the pump. The tubing is so cheap that
        it is no point in trying to clean it.
      </p>

      <figure>
        <Image
          src="/part-ii-cleaning-1.JPEG"
          alt="Grouphead"
          width={1536}
          height={2048}
        />
        <figcaption>Grouphead dirt.</figcaption>
      </figure>

      <figure>
        <Image
          src="/part-ii-cleaning-2.JPEG"
          alt="Make me suffer more"
          width={1536}
          height={2048}
        />
        <figcaption>Boiler dirt.</figcaption>
      </figure>

      <p>
        Above you can see the state the group head when I first opened it. The
        boiler itself was not any better. I am happy the machine did not work at
        first or else I might have tasted the coffee coming out of there...
      </p>

      <figure>
        <Image
          src="/part-ii-clean.JPEG"
          alt="Cleaned"
          width={1536}
          height={2048}
        />
        <figcaption>After alot of cleaning.</figcaption>
      </figure>

      <p>
        After many hours the cleaning it was finally done. It is really tricky
        to reach every part and with this machine it was not possible to get it
        back to "new" state of cleanliness. I really urge you do regulare
        de-scale and cleaning of any machine you own. Beyond a certain line, it
        is so much worse to fix. In this case the scale was so bad that some
        parts was stuck and not possible to remove without damagin. I used
        excessive force and heating/cooling different parts in order to get it
        apart. Thankfully, I got the machine basiaclly for free and new parts
        are easily available at decent prices which makes foceful operations
        legitimate.
      </p>

      <p>
        Running the machine for the first time and picking it apart is fun
        stuff. Cleaning is not. But it is a necessary evil and if not done well,
        the rest the project is just wasted time.
      </p>
    </Layout>
  )
}
