'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { useState } from "react"
import { Wordcloud } from "@visx/wordcloud"
import { scaleLog } from "@visx/scale"
import { Text } from "@visx/text"

interface ClientPageProps {
    topicName: string 
    initialData: {text: string, value: number }[]
}

const COLORS = ['#143059', '#2F6B9A', '#82A6C2']

const ClientPage = ({topicName, initialData}: ClientPageProps) => {
    const [words, setWords] = useState(initialData)

    const fontScale = scaleLog({
        domain: [
            Math.min(...words.map((w) => w.value)), 
            Math.max(...words.map((w) => w.value)),
        ],
        range: [10, 100]
    }) 

    return (
        <div className='w-full flex flex-col items-center justify-center min-h-screen bg-grid-zinc-50 pb-20'>
            <MaxWidthWrapper className='flex flex-col items-center gap-6 pt-20'>
                <h1 className='text-4xl sm:text-5xl font-bold text-center tracking-tight text-balance'>
                    What people think about{" "}
                    <span className='text-blue-600'>
                        {topicName}
                    </span>:
                </h1>

                <p className='text-sm'>(updated in real-time)</p>

                <div className='aspect-square max-w-xl flex items-center justify-center'>
                    <Wordcloud
                        words={words}
                        width={500}
                        height={500}
                        fontSize={(data) => fontScale(data.value)}
                        font={'Impact'}
                        padding={2}
                        spiral='archimedean'
                        rotate={0}
                        random={() => 0.5}
                    >
                        {(cloudWords) => cloudWords.map((w, i) => (
                            <Text 
                                key={w.text} 
                                fill={COLORS[i % COLORS.length]}
                                textAnchor='middle'
                                transform={`translate(${w.x}, ${w.y})`}
                                fontSize={w.size}
                                fontFamily={w.font}
                            >
                                {w.text}
                            </Text>
                        ))}
                    </Wordcloud>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default ClientPage