import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={330}
        height={352}
        viewBox="0 0 330 352"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="162" y="7" rx="0" ry="0" width="285" height="230" />
        <rect x="164" y="246" rx="0" ry="0" width="282" height="18" />
        <rect x="163" y="304" rx="0" ry="0" width="282" height="28" />
        <rect x="163" y="343" rx="0" ry="0" width="282" height="48" />
    </ContentLoader>
)
