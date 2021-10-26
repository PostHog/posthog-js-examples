import { SPLITS } from './split'

/**
 * Returns a treatment from the cached splits, if the value has default rules set it will
 * randomly pick one based on each rule' percentage.
 *
 * NOTE: This code is not production ready, there are many things you can do with Split
 * besides checking for default rules.
 */
export async function getTreatment(key: string, name: SPLITS): Promise<boolean> {

  const featureEnabled = await isFeatureEnabled(key, name)

  return featureEnabled
}

async function isFeatureEnabled(distinctUserId: string, featureName: string): Promise<any> {
  console.log('isFeatureEnabled', distinctUserId, featureName)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_POSTHOG_HOST}/decide?v=2`,
    {
      method: 'POST',
      body: JSON.stringify({
        api_key: process.env.NEXT_PUBLIC_POSTHOG_PROJECT_API_KEY,
        distinct_id: distinctUserId,
      }),
    }
  )

  if (!res.ok) {
    throw new Error(
      `Fetch request to retrieve the list of splits failed with: (${res.status}) ${res.statusText}`
    )
  }

  const data = await res.json()
  console.log(data)

  const featureEnabled = data.featureFlags[featureName] || false
  console.log('featureEnabled', featureEnabled)

  return featureEnabled
}
