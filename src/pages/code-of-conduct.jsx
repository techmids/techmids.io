import Head from "next/head";
import {SimpleLayout} from "@/components/SimpleLayout";

export default function CoC() {
  return (
      <>
              <Head>
                  <title>Code Of Conduct- TechMids</title>
                  <meta
                      name="description"
                      content="TechMids Code Of Conduct"
                  />
              </Head>
              <SimpleLayout
                  title="The Quick Version"
                  intro=""
              >
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                      All attendees, speakers, sponsors, and volunteers at any TechMids affiliated event
                      are required to agree with the following code of conduct.
                  </p>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                      Organizers will enforce this code throughout the event.
                  </p>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                      We are expecting cooperation from all participants to help ensure a
                      safe environment for everybody.
                  </p>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                      Our community is dedicated to providing a harassment-free
                      experience for everyone, regardless of gender, gender
                      identity and expression, age, sexual orientation, disability,
                      physical appearance, body size, race, ethnicity, religion (or lack
                      thereof), or technology choices.
                  </p>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                      We do not tolerate harassment of participants in any
                      form.
                  </p>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                      Sexual language and imagery is not appropriate for any
                      venue, including talks, workshops, parties, Twitter, and other
                      online media.
                  </p>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                      Event participants violating these rules may be sanctioned or
                      expelled from the event without a refund at the discretion of
                      the event organizers.
                  </p>
              </SimpleLayout>
        <SimpleLayout title='The Less Quick Version' intro=''>

                      <p className="mt-8 text-xl leading-8 text-gray-500">
                          Harassment includes offensive verbal comments related to gender,
                          gender identity and expression, age, sexual orientation,
                          disability, physical appearance, body size, race, ethnicity,
                          religion, technology choices, sexual images in public spaces,
                          deliberate intimidation, stalking, following, harassing
                          photography or recording, sustained disruption of talks or other
                          events, inappropriate physical contact, and unwelcome sexual
                          attention. Participants asked to stop any harassing behavior are
                          expected to comply immediately.
                      </p>
                      <p className="mt-8 text-xl leading-8 text-gray-500">
                          Sponsors are also subject to the anti-harassment policy. In
                          particular, sponsors should not use sexualized images, activities,
                          or other material. Booth staff (including volunteers) should not
                          use sexualized clothing/uniforms/costumes, or otherwise create a
                          sexualized environment.
                      </p>
                      <p className="mt-8 text-xl leading-8 text-gray-500">
                          If a participant engages in harassing behavior, the event
                          organizers may take any action they deem appropriate, including
                          warning the offender or expulsion from the event with no
                          refund.
                      </p>
                      <p className="mt-8 text-xl leading-8 text-gray-500">
                          If you are being harassed, notice that someone else is being
                          harassed, or have any other concerns, please contact a member of
                          event staff immediately.
                      </p>
                      <p className="mt-8 text-xl leading-8 text-gray-500">
                          Event staff can either be identified by a TechMids t-shirt or a specific identifier for the event you are attending.
                          Event staff will be happy to help participants contact
                          hotel/venue security or local law enforcement, provide escorts, or
                          otherwise assist those experiencing harassment to feel safe for
                          the duration of the event. We value your attendance.
                      </p>
                      <p className="mt-8 text-xl leading-8 text-gray-500">
                          We expect participants to follow these rules at event and
                          workshop venues and event-related social events.
                      </p>
                      <p className="mt-8 text-xl leading-8 text-gray-500">
                          The TechMids Code of Conduct is based on{' '}
                          <a
                              className="text-yellow-600 underline"
                              href={'https://confcodeofconduct.com'}
                          >
                              confcodeofconduct.com.
                          </a>
                      </p>
              </SimpleLayout>
      </>
  )
}