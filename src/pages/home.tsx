import { Button } from '@/components/ui/button'
import Men from '@/assets/men.png'
import { featuredItems, progress } from '@/constants'
import { Card } from '@/components/ui/card'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
function Home() {
	return (
		<div>
			<div className='w-full h-screen flex items-center mt-20'>
				<div className='max-w-xl ml-60 flex h-full flex-col justify-center'>
					<h1 className='text-9xl font-semibold uppercase'>WORKUOT WITH ME</h1>
					<p className='text-sm text-muted-foreground mt-4'>
						A hugo selection of health and fitness content,heathly recipes and
						transformation stories to help you get fit and stay fit!
					</p>

					<Link to={'/auth'}>
						<Button className='w-fit mt-6 font-bold h-12' size={'lg'}>
							Join club now
						</Button>
					</Link>

					<h2 className='mt-20 font-bold text-xl'>AS FEATURED IN</h2>
					<div className='flex gap-4 mt-3'>
						{featuredItems.map((Icon, idx) => (
							<Icon key={idx} size={'icon'} className='w-12 h-12' />
						))}
					</div>
				</div>
				<img src={Men} alt='men-image' className='w-1/4' />
			</div>

			<div className='container max-w-5xl mx-auto'>
				<h2 className='text-4xl'>Not sure where to start?</h2>
				<p className='mt-2 text-muted-foreground'>
					Programs offer day-to-day guidance on an interactive calendar to keep
					you on track.
				</p>

				<div className='grid grid-cols-3 gap-4 my-8'>
					{progress.map(item => (
						<Card
							key={item.title}
							className='p-8 relative cursor-pointer group'
						>
							<h3>{item.title}</h3>
							<p>{item.descr}</p>

							<Button
								size={'icon'}
								variant={'ghost'}
								className='absolute right-2 top-1/2 group-hover:translate-x-1 transition-transform'
							>
								<FaArrowRightLong />
							</Button>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
