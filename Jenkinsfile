pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello, Jenkins!'
            }
        }

        stage('Build') {
            steps {
                echo 'Pretending to build the project...'
                sh 'echo "Building..."'
            }
        }
    }
}
