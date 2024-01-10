import classes from './page.module.css'

export default function Home() {
	return (
		<main className={classes.main}>
			<div>
				Проект &quot;Мои интервью&quot; состоит из фич:
				<ul>
					<li>календаря интервью</li>
					<li>описание вакансии и требуемых навыков</li>
					<li>описание компании и предыдущего опыта в подобной области</li>
					<li>отзывы других разработчиков</li>
					<li>профиля соискателя и уровень текущих навыков</li>
				</ul>
			</div>
		</main>
	)
}
