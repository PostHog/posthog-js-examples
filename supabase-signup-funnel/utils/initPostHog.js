import posthog from 'posthog-js'

export const initPostHog = () => {
    if(typeof window !== 'undefined') {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        })
    }

    return posthog
}