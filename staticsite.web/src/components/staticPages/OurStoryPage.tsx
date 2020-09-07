import React from 'react';
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'
import md5 from 'md5';
import 'src/components/staticPages/OurStoryPage.scss';

const kyleHash = md5('kyle@finley.sh');
const nicoleHash = md5('nicolesacharow@gmail.com');

const OurStoryPage: React.FC = () : JSX.Element => {
  return (
    <Segment basic>
      <Grid relaxed='very'>
        <Grid.Row columns={2} divided>
          <Grid.Column>
            <Image
              alt='Kyle Finley'
              floated='left'
              size='small'
              src={`https://www.gravatar.com/avatar/${kyleHash}?s=800`}
            />
            <p>
              On March 24, 1992, Dennis and Lori Finley welcomed Kyle into the world.
              Kyle grew up in <a href='https://goo.gl/maps/UnXhqhHVrK3uGeFP9' target='blank'>Dalton, Ohio</a> surrounded by a loving family.
            </p>
            <p>
              From a young age, he actively volunteered at churches to build an engaging and welcoming environment.
              This passion originated in Sunday school where he ran the projector and was taught about sound engineering.
              Over the years, this evolved into creating computer generated graphics, all but taking over the role of sound engineer for a church, and becoming a leader in area youth groups.
              He also taught himself how to play drums and guitar to further use his talents to bless others and worship God.
            </p>
            <p>
              While studying at <a href='https://www.uakron.edu/' target='blank'>The University of Akron</a> Kyle worked at <a href='https://acresoffun.com/' target='blank'>Acres of Fun</a>, a family fun park in <a href='https://goo.gl/maps/QP4Ameu8HGhLt3zRA' target='blank'>Wooster, Ohio</a>.
              In September 2010, he assisted in designing and building a haunted house in the laser tag arena of <a href='https://acresoffun.com/' target='blank'>Acres of Fun</a> for the halloween season.
            </p>
          </Grid.Column>

          <Grid.Column>
            <Image
              alt='Nicole Sacharow'
              floated='right'
              size='small'
              src={`https://www.gravatar.com/avatar/${nicoleHash}?s=800`}
            />
            <p>
              On July 7th, 1992, Sara Wasserstrom and Jeff Sacharow welcomed their second daughter, Nicole, into the world.
              Nicole grew up in a loving family of four in <a href='https://goo.gl/maps/EqNvMiEXDdN2K2fq6' target='blank'>Culver City, California</a>.
            </p>
            <p>
              A natural entertainer, she began performing in plays at five years old, her first role being a munchkin in a children’s production of The Wizard of Oz.
              From there on, Nicole was hooked to being on stage.
              Nicole continued to perform throughout middle school and high school.
            </p>
            <p>
              Having exploring different countries around the world with her family and high school, Nicole wanted to experience living somewhere entirely different than her home state of <a href='https://goo.gl/maps/iwW99ewU2GXKnUMi7' target='blank'>California</a>.
              Looking for a potential college to attend in the book <a href='https://www.amazon.com/dp/0143122304/ref=cm_sw_em_r_mt_dp_peMvFbMJGC9W3' target='blank'>Colleges That Change Lives</a>, she stumbled upon <a href='https://www.wooster.edu/' target='blank'> The College of Wooster</a>.
            </p>
            <p>
              After touring <a href='https://www.wooster.edu/' target='blank'> The College of Wooster</a> her decision was made.
              During Nicole's first semester of college she receieved an email from the theatre department that a local company, <a href='https://acresoffun.com/' target='blank'>Acres of Fun</a>, was looking to hire actors for it's upcoming haunted house and she could not resist applying.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Divider />

        <Grid.Row columns={1}>
          <Grid.Column>
            <p>
              Kyle and Nicole didn’t meet in a typical office environment, they met working in a laser tag arena that was converted into a haunted house that Kyle himself helped construct.
              It was chance.
              Had Nicole, a chatty <a href='https://goo.gl/maps/iwW99ewU2GXKnUMi7' target='blank'>California</a> girl, not picked <a href='https://www.wooster.edu/' target='blank'> The College of Wooster</a> or told them she was considering studying theatre, she would never have received the email recruiting potential theatre majors to work at that haunted house to make some extra cash.
            </p>
            <p>
              Their first official date was to see the movie <a href='https://www.imdb.com/title/tt1477076/' target='blank'>Saw 3D</a>.
              Kyle showed up to Nicole’s dorm with a bouquet of flowers and they went out to a nice dinner at <a href='http://restaurantwasabi.com/canton/' target='blank'>Wasabi</a> before the movie.
              It was the most romantic date Nicole had ever had.
              She was swept off her feet.
              The movie... well... it was as good as you’d expect.
            </p>
            <p>
              Time flies by.
              What began with Kyle’s first trip on a plane has transformed into Kyle’s first trip to out of the country, to <a href='https://goo.gl/maps/xVryLkxC2UeCU3c76' target='blank'>London</a>, a place they now hold deep in their hearts.
              Traveling the world together is one of the great joys of their lives, whether it be <a href='https://goo.gl/maps/dHDfw5s3mYZQ3aaX8' target='blank'>Ohio</a> or <a href='https://goo.gl/maps/TaDGxmCHqVx6RN7PA' target='blank'>San Diego</a> or <a href='https://goo.gl/maps/xVryLkxC2UeCU3c76' target='blank'>London</a>.
            </p>
            <p>
              They’ve lived in three different places together, starting in <a href='https://goo.gl/maps/J2Jn6tBMpL9xp8rs9' target='blank'>Glendora</a>, before moving to <a href='https://goo.gl/maps/1zpgvv1b71XMCf8t8' target='blank'>Santa Monica</a> and, ultimately, <a href='https://goo.gl/maps/moVP8iewjKGZkCdh6' target='blank'>Irvine</a>.
              Where will they move next?
              Time will tell.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )

}

export default OurStoryPage;
