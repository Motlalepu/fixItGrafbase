// Import the necessary modules from '@grafbase/sdk'
import { graph, config, scalar } from '@grafbase/sdk'

const g = graph.Standalone()

// Define the User type
const User = g.type('User', {
    name: scalar.string().resolver('validateNameLength') ,
    email: scalar.email() ,
    avatarUrl: scalar.url(),
    description: scalar.string().optional(),
    githubUrl: scalar.url().optional(),
    linkedInUrl: scalar.url().optional(),
    projects: g.ref('projects').optional().list(), // Relation to the Project type
})

// Define the Project type
const Project = g.type('Project', {
    title: scalar.string().resolver('validateNameLength'),
    description: scalar.string().optional(),
    url: scalar.url(),
    owner: scalar.string(), // Relation to the User type
    liveUrl: scalar.url(),
    image: scalar.url(),
    githubUrl: scalar.url(),
    category: scalar.string() ,
    createdBy: scalar.string(),
})

// Export the configuration with the graph schema
export default config({
  graph: g
})

