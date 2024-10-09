import Link from 'next/link';

export default function StudentInfo() {
  return (
    <main>
      <h1>Student Information</h1>
      <p>Name: Vardan </p>
      <p>
        GitHub Repository: 
        <Link href="https://github.com/Vardan07-VJ/cprg306-assignments" passHref>
          <a target="_blank">My GitHub Repo</a>
        </Link>
      </p>
    </main>
  );
}
