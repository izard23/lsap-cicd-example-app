pipeline {
    agent any

    tools {
        nodejs 'node-20'
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}
