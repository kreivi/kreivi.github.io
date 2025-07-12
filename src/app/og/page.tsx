import { ImageResponse } from 'next/og'

export default function GET(request: Request) {
    let title = 'Development Blog';
    if (request.url) {
        const url = new URL(request.url);
        title = url.searchParams.get('title') || title;
    }

    return new ImageResponse(
        (
            <div style={{ 
                display: 'flex', 
                width: '100%', 
                height: '100%', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: 'white',
                padding: '40px'
            }}>
                <h1 style={{ 
                    fontSize: '64px',
                    fontWeight: 'bold',
                    color: '#000',
                    textAlign: 'center'
                }}>
                    {title}
                </h1>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    )
}