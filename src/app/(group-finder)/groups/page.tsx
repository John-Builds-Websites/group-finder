import Container from '@/components/layout/Container'
import configPromise from '@/app/(payload)/payload.config'
import { getPayload } from 'payload'

export default async function GroupsPage () {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'groups',
  })

  const groups = data.docs || []

  return (
    <Container>
      <h1>Groups</h1>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            <h2>{group.title}</h2>
            <p>{group.description}</p>
            {/* <h3>Followers</h3>
            <ul>
              {group.followers.map((follower) => (
                <li key={follower._id}>{follower.email}</li>
              ))}
            </ul> */}

            {
              group.moderators.length > 0 && (
                <><h3>Moderators</h3><ul>
                  {group.moderators.map((moderator) => (
                    <li key={moderator.id}>{moderator.email}</li>
                  ))}
                </ul></>
              )
            }

            <h3>Suitable for</h3>
            <ul>
              {group['attendee-types'].map((attendeeType) => (
                <li key={attendeeType.id}>{attendeeType.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  )
}
