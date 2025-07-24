// Portfolio project data
const portfolioData = {
  react: {
    title: "React AWS Deployment",
    category: "React AWS Deployment",
    technologies: ["React.js", "AWS S3", "CloudFront", "Route 53", "CI/CD"],
    deploymentPlatform: "AWS Cloud Infrastructure",
    status: "Deployed to Production",
    githubUrl: "https://github.com/oyebiyisunday/React-cicd-aws",
    githubText: "View React CI/CD AWS Repository",
    description: {
      main: "This portfolio showcases comprehensive React.js applications deployed on AWS cloud infrastructure. Each project demonstrates modern React development practices including component-based architecture, state management, responsive design, and cloud-native deployment strategies using AWS services.",
      secondary: "The React applications feature diverse functionality from e-commerce platforms and task management systems to analytics dashboards and social media interfaces. All projects are optimized for performance, scalability, and security with AWS CloudFront CDN, S3 static hosting, and Route 53 DNS management."
    },
    images: [
      { src: "Projects/react_deployemnt/React Main.png", alt: "React Main Dashboard" },
      { src: "Projects/react_deployemnt/react1.png", alt: "React E-Commerce Platform" },
      { src: "Projects/react_deployemnt/react2.png", alt: "React Component Library" },
      { src: "Projects/react_deployemnt/react3.png", alt: "React Task Management" },
      { src: "Projects/react_deployemnt/react4.png", alt: "React Analytics Dashboard" },
      { src: "Projects/react_deployemnt/react5.png", alt: "React Social Media App" },
      { src: "Projects/react_deployemnt/react6.png", alt: "React Portfolio Website" },
      { src: "Projects/react_deployemnt/react7.png", alt: "React Real-time Chat" },
      { src: "Projects/react_deployemnt/react8.png", alt: "React Data Visualization" },
      { src: "Projects/react_deployemnt/react10.png", alt: "React Shopping Cart" },
      { src: "Projects/react_deployemnt/react11.png", alt: "React Authentication System" },
      { src: "Projects/react_deployemnt/react12.png", alt: "React File Manager" }
    ],
    features: [
      {
        icon: "bi-code-slash",
        title: "Modern React Development",
        description: "Component-based architecture with hooks, context API, and modern JavaScript ES6+ features for maintainable and scalable applications."
      },
      {
        icon: "bi-cloud-upload",
        title: "AWS S3 Static Hosting",
        description: "Optimized deployment using AWS S3 for reliable, cost-effective static website hosting with global availability and high performance."
      },
      {
        icon: "bi-speedometer2",
        title: "CloudFront CDN",
        description: "Global content delivery network integration for faster load times, reduced latency, and improved user experience worldwide."
      },
      {
        icon: "bi-gear",
        title: "CI/CD Pipeline Integration",
        description: "Automated deployment workflows using GitHub Actions or AWS CodePipeline for continuous integration and deployment to AWS infrastructure."
      }
    ],
    architecture: {
      title: "React AWS Deployment Architecture",
      diagram: `
        <div class="architecture-diagram">
          <h4>Architecture Flow</h4>
          <div class="architecture-flow">
            <div class="flow-step">
              <div class="step-icon"><i class="bi bi-person-gear"></i></div>
              <div class="step-content">
                <h5>Development</h5>
                <p>Developer → GitHub Repository → GitHub Actions CI/CD</p>
              </div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="step-icon"><i class="bi bi-cloud-upload"></i></div>
              <div class="step-content">
                <h5>Deployment</h5>
                <p>S3 Static Hosting → CloudFront CDN → Route 53 DNS</p>
              </div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="step-icon"><i class="bi bi-globe"></i></div>
              <div class="step-content">
                <h5>Global Access</h5>
                <p>End Users → Route 53 → CloudFront → S3</p>
              </div>
            </div>
          </div>
        </div>
      `,
      tradeOffs: [
        {
          decision: "Hosting Solution",
          selected: "S3 Static Website",
          alternative: "EC2 with Apache/Nginx",
          pros: ["Selected: S3 Static Website", "99.99% availability SLA", "$0.023/GB storage vs $0.10/hour EC2", "Automatic scaling", "No server patching required"],
          cons: ["Static content only", "No server-side processing"],
          impact: "90% cost reduction with higher reliability for React SPAs"
        },
        {
          decision: "Content Delivery",
          selected: "CloudFront CDN",
          alternative: "Origin-only S3",
          pros: ["Selected: CloudFront CDN", "300+ edge locations", "Built-in DDoS protection", "SSL/TLS termination", "Gzip compression"],
          cons: ["Additional $0.085/GB transfer cost", "Cache invalidation complexity"],
          impact: "50% faster load times globally, especially for international users"
        },
        {
          decision: "CI/CD Pipeline",
          selected: "GitHub Actions",
          alternative: "Manual S3 Upload",
          pros: ["Selected: GitHub Actions", "Automated testing and deployment", "Free for public repos", "Build optimization", "Environment management"],
          cons: ["Learning curve for YAML configuration", "Monthly minutes limit for private repos"],
          impact: "Zero deployment errors with 5-minute automated releases"
        },
        {
          decision: "SSL Management",
          selected: "AWS Certificate Manager",
          alternative: "Let's Encrypt",
          pros: ["Selected: AWS Certificate Manager", "Free SSL certificates", "Automatic renewal", "AWS integration", "Wildcard support"],
          cons: ["AWS ecosystem lock-in", "Limited to AWS services"],
          impact: "Zero SSL management overhead with enterprise-grade certificates"
        }
      ],
      securityFeatures: [
        "SSL/TLS encryption via CloudFront with ACM certificates",
        "S3 bucket policies preventing public write access",
        "CloudFront Origin Access Identity (OAI) for S3 protection",
        "Content Security Policy (CSP) headers",
        "HTTPS-only redirects and HSTS headers"
      ],
      performanceOptimizations: [
        "CloudFront edge caching with 24-hour TTL",
        "Gzip compression for text assets (CSS, JS, HTML)",
        "React code splitting and lazy loading",
        "Optimized bundle sizes with Webpack tree shaking",
        "Browser caching with appropriate cache headers"
      ],
      costOptimization: [
        "S3 Standard storage class for active content",
        "CloudFront regional edge caches for cost efficiency",
        "GitHub Actions free tier for CI/CD (2000 minutes/month)",
        "Route 53 cost optimization with alias records",
        "S3 lifecycle policies for old deployment artifacts"
      ]
    }
  },
  wordpress: {
    title: "WordPress AWS Deployment",
    category: "WordPress AWS Deployment",
    technologies: ["WordPress", "Linux", "EC2", "RDS MySQL", "CloudFormation", "ALB"],
    deploymentPlatform: "AWS Cloud Infrastructure",
    status: "Deployed to Production",
    description: {
      main: "This portfolio demonstrates comprehensive WordPress solutions deployed on AWS cloud infrastructure using Linux environments. Each project showcases scalable WordPress deployments leveraging AWS services including EC2 instances, RDS MySQL databases, Application Load Balancers, and CloudFormation for infrastructure as code.",
      secondary: "The WordPress deployments range from corporate websites and e-commerce stores to custom blog platforms and business directories. All projects feature security hardening, performance optimization, automated backups, and high-availability configurations optimized for production workloads."
    },
    images: [
      { src: "Projects/WordPress Deployement/wp1.png", alt: "WordPress Main Dashboard" },
      { src: "Projects/WordPress Deployement/wp2.png", alt: "WordPress Corporate Website" },
      { src: "Projects/WordPress Deployement/wp3.png", alt: "WordPress E-Commerce Store" },
      { src: "Projects/WordPress Deployement/wp4.png", alt: "WordPress Blog Platform" },
      { src: "Projects/WordPress Deployement/wp5.png", alt: "WordPress Business Directory" },
      { src: "Projects/WordPress Deployement/wp6.png", alt: "WordPress Portfolio Site" },
      { src: "Projects/WordPress Deployement/wp7.png", alt: "WordPress Custom Theme" },
      { src: "Projects/WordPress Deployement/wp8.png", alt: "WordPress Plugin Development" },
      { src: "Projects/WordPress Deployement/wp9.png", alt: "WordPress Admin Dashboard" },
      { src: "Projects/WordPress Deployement/wp10.png", alt: "WordPress Content Management" },
      { src: "Projects/WordPress Deployement/wp11.png", alt: "WordPress Security Configuration" },
      { src: "Projects/WordPress Deployement/wp12.png", alt: "WordPress Performance Optimization" }
    ],
    features: [
      {
        icon: "bi-wordpress",
        title: "WordPress CMS Solutions",
        description: "Custom WordPress themes, plugins, and configurations tailored for business requirements with focus on user experience and content management."
      },
      {
        icon: "bi-server",
        title: "Linux Server Environment",
        description: "Optimized Linux server configurations on AWS EC2 with proper security hardening, performance tuning, and monitoring for WordPress hosting."
      },
      {
        icon: "bi-database",
        title: "RDS MySQL Integration",
        description: "Managed MySQL database service with automated backups, read replicas, and multi-AZ deployment for high availability and data durability."
      },
      {
        icon: "bi-distribute-horizontal",
        title: "Load Balancer & Auto Scaling",
        description: "Application Load Balancer configuration with auto-scaling groups for handling traffic spikes and ensuring consistent performance under load."
      }
    ],
    architecture: {
      title: "WordPress AWS Deployment Architecture",
      diagram: `
        <div class="architecture-diagram">
          <h4>Complete WordPress Deployment Pipeline</h4>
          <div class="architecture-flow">
            <div class="flow-step">
              <div class="step-icon"><i class="bi bi-code-square"></i></div>
              <div class="step-content">
                <h5>Source Code</h5>
                <p>Git Repository → WordPress Core + Custom Themes/Plugins</p>
              </div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="step-icon"><i class="bi bi-gear"></i></div>
              <div class="step-content">
                <h5>CI/CD Pipeline</h5>
                <p>GitHub Actions → Build → Test → Deploy to EC2</p>
              </div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="step-icon"><i class="bi bi-cloud"></i></div>
              <div class="step-content">
                <h5>AWS Infrastructure</h5>
                <p>ALB → Auto Scaling EC2 → RDS MySQL → S3 Media</p>
              </div>
            </div>
          </div>
          <div class="supporting-services">
            <h5>Infrastructure Components</h5>
            <div class="service-grid">
              <span><i class="bi bi-shield-check"></i> CloudFormation IaC</span>
              <span><i class="bi bi-speedometer2"></i> CloudFront CDN</span>
              <span><i class="bi bi-hdd-stack"></i> EFS Shared Storage</span>
              <span><i class="bi bi-eye"></i> CloudWatch Monitoring</span>
            </div>
          </div>
        </div>
      `,
      tradeOffs: [
        {
          decision: "Hosting Platform",
          selected: "EC2 Auto Scaling Group",
          alternative: "AWS Lightsail WordPress or Managed WordPress services",
          pros: ["Selected: EC2 Auto Scaling Group", "Full control over PHP/Apache configuration", "Custom plugin installations", "Multi-AZ deployment capability", "Integration with other AWS services"],
          cons: ["Requires server management expertise", "Higher operational overhead", "Patching and maintenance responsibility"],
          impact: "Complete WordPress customization with enterprise scalability vs simplified managed hosting"
        },
        {
          decision: "Database Solution",
          selected: "RDS MySQL Multi-AZ",
          alternative: "Self-managed MySQL on EC2 or Aurora Serverless",
          pros: ["Selected: RDS MySQL Multi-AZ", "Automated backups with point-in-time recovery", "Automatic failover in <60 seconds", "Read replica support", "Performance insights and monitoring"],
          cons: ["Higher cost than self-managed ($100-300/month vs $20-50/month)", "Limited root access to MySQL configuration"],
          impact: "99.95% database availability with zero maintenance vs cost savings with manual management"
        },
        {
          decision: "Load Balancing",
          selected: "Application Load Balancer (ALB)",
          alternative: "Classic Load Balancer or Network Load Balancer",
          pros: ["Selected: Application Load Balancer (ALB)", "Layer 7 routing for WordPress multisite", "SSL termination and certificate management", "Content-based routing rules", "WebSocket support for real-time features"],
          cons: ["Higher cost than Classic LB ($0.0225/hour vs $0.025/hour)", "More complex configuration"],
          impact: "Advanced WordPress routing capabilities and SSL management vs basic load balancing"
        },
        {
          decision: "File Storage Strategy",
          selected: "EFS + S3 Combination",
          alternative: "EBS volumes only or S3 with plugins",
          pros: ["Selected: EFS + S3 Combination", "Multi-AZ file sharing for WordPress uploads", "Automatic scaling with usage", "Concurrent access from multiple instances", "S3 for long-term media storage"],
          cons: ["Network latency for file operations", "Higher cost for frequent access ($0.30/GB vs $0.10/GB EBS)"],
          impact: "Seamless multi-instance WordPress deployment vs single-instance limitations"
        },
        {
          decision: "Infrastructure Management",
          selected: "CloudFormation Templates",
          alternative: "Manual AWS Console setup or Terraform",
          pros: ["Selected: CloudFormation Templates", "Native AWS integration", "Stack rollback capabilities", "Change sets for preview", "No external state management"],
          cons: ["AWS-specific JSON/YAML syntax", "Learning curve for complex templates", "Limited cross-cloud portability"],
          impact: "Reproducible WordPress infrastructure in minutes vs hours of manual configuration"
        },
        {
          decision: "CI/CD Pipeline",
          selected: "GitHub Actions",
          alternative: "AWS CodePipeline or Jenkins on EC2",
          pros: ["Selected: GitHub Actions", "Direct integration with Git repositories", "Free for public repos (2000 minutes/month private)", "Extensive action marketplace", "Easy WordPress deployment workflows"],
          cons: ["External dependency outside AWS", "Limited to GitHub repositories", "Potential vendor lock-in"],
          impact: "Automated WordPress deployments with zero downtime vs manual FTP uploads"
        }
      ],
      securityFeatures: [
        "AWS WAF protection against common web exploits",
        "Security Groups restricting SSH to specific IPs",
        "SSL/TLS encryption with ACM certificates",
        "WordPress security plugins (Wordfence, Sucuri)",
        "VPC with private subnets for database tier",
        "Regular WordPress core and plugin updates via WP-CLI"
      ],
      performanceOptimizations: [
        "Auto Scaling based on CPU and memory metrics",
        "RDS read replicas for heavy read workloads",
        "CloudFront CDN for static assets and images",
        "WordPress caching plugins (W3 Total Cache, WP Rocket)",
        "EFS provisioned throughput for high-traffic sites",
        "Application-level MySQL query optimization"
      ],
      costOptimization: [
        "Reserved Instances for predictable WordPress workloads (40% savings)",
        "Spot Instances for development/staging environments",
        "S3 Intelligent Tiering for WordPress media uploads",
        "RDS Reserved Instances for production databases",
        "Auto Scaling to optimize instance count during low traffic",
        "CloudWatch alarms for cost monitoring and alerts"
      ]
    }
  },
  database: {
    title: "Database Design & Architecture",
    category: "Database Design & Architecture",
    technologies: ["MySQL", "MongoDB", "ERD Design", "UML Modeling"],
    deploymentPlatform: "Lucidchart, MySQL Workbench, APEX",
    status: "Expertise Demonstration",
    description: {
      main: "This portfolio showcases comprehensive database design expertise across various business domains including banking systems, hotel management, and voting applications. Each project demonstrates advanced database modeling techniques using Entity Relationship Diagrams (ERD), UML modeling, and both relational and NoSQL database architectures.",
      secondary: "The database designs feature normalization principles, constraint implementation, performance optimization, and scalable architecture patterns. Projects include MySQL relational database schemas, MongoDB document structures, and comprehensive data modeling for complex business requirements with focus on data integrity and query performance."
    },
    images: [
      { src: "Projects/Database Design/DB main.png", alt: "Database Main Dashboard" },
      { src: "Projects/Database Design/DB2.png", alt: "Database Design Interface" },
      { src: "Projects/Database Design/DB3.png", alt: "Database Schema Design" },
      { src: "Projects/Database Design/DB4.png", alt: "Database Management System" },
      { src: "Projects/Database Design/Hotel UML.png", alt: "Hotel UML Diagram" },
      { src: "Projects/Database Design/Voting UML.png", alt: "Voting UML Diagram" },
      { src: "Database Design and Queries/Bank Chen diagram.png", alt: "Bank Chen Diagram" },
      { src: "Database Design and Queries/Bank UML Diagram.png", alt: "Bank UML Diagram" },
      { src: "Database Design and Queries/Hotel Chen Diagram.png", alt: "Hotel Chen Diagram" },
      { src: "Database Design and Queries/Voting Chen diagram.png", alt: "Voting Chen Diagram" }
    ],
    features: [
      {
        icon: "bi-diagram-3",
        title: "ERD & UML Modeling",
        description: "Comprehensive Entity Relationship Diagrams and UML models showcasing proper normalization, relationships, and business rule implementation."
      },
      {
        icon: "bi-database",
        title: "MySQL Architecture",
        description: "Relational database design with optimized table structures, indexes, stored procedures, and constraint implementation for data integrity."
      },
      {
        icon: "bi-collection",
        title: "MongoDB Schema Design",
        description: "NoSQL document database modeling with embedded documents, references, and schema validation for flexible data structures."
      },
      {
        icon: "bi-bar-chart",
        title: "Performance Optimization",
        description: "Query optimization, indexing strategies, and database performance tuning for efficient data retrieval and storage operations."
      }
    ],
    architecture: {
      title: "Database Design & Architecture",
      diagram: `
        <div class="architecture-diagram">
          <h4>Hybrid Database Architecture</h4>
          <div class="architecture-flow">
            <div class="flow-step">
              <div class="step-icon"><i class="bi bi-app"></i></div>
              <div class="step-content">
                <h5>Application Layer</h5>
                <p>REST API Gateway → Application Servers</p>
              </div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="step-icon"><i class="bi bi-database"></i></div>
              <div class="step-content">
                <h5>OLTP Databases</h5>
                <p>MySQL RDS → Read Replicas → Redis Cache</p>
              </div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="step-icon"><i class="bi bi-collection"></i></div>
              <div class="step-content">
                <h5>NoSQL & Analytics</h5>
                <p>MongoDB Atlas → Redshift → S3 Data Lake</p>
              </div>
            </div>
          </div>
          <div class="supporting-services">
            <h5>Data Flow & Analytics</h5>
            <div class="service-grid">
              <span><i class="bi bi-arrow-repeat"></i> AWS Glue ETL</span>
              <span><i class="bi bi-graph-up"></i> Kinesis Streams</span>
              <span><i class="bi bi-bar-chart"></i> QuickSight</span>
              <span><i class="bi bi-diagram-2"></i> Oracle APEX</span>
            </div>
          </div>
        </div>
      `,
      tradeOffs: [
        {
          decision: "Relational Database",
          selected: "MySQL RDS",
          alternative: "PostgreSQL RDS",
          pros: ["Selected: MySQL RDS", "WordPress compatibility", "Extensive community support", "Better performance for simple queries", "Lower learning curve"],
          cons: ["Limited JSON support", "Less advanced features than PostgreSQL", "Weaker with complex queries"],
          impact: "Optimal for WordPress and web applications with proven reliability"
        },
        {
          decision: "NoSQL Solution",
          selected: "DynamoDB",
          alternative: "MongoDB on EC2",
          pros: ["Selected: DynamoDB", "Serverless scaling", "Single-digit millisecond latency", "Built-in security", "No server management"],
          cons: ["AWS vendor lock-in", "Limited query flexibility", "Higher cost for large datasets"],
          impact: "Perfect for session management and real-time applications"
        },
        {
          decision: "Caching Strategy",
          selected: "ElastiCache Redis",
          alternative: "Application-level caching",
          pros: ["Selected: ElastiCache Redis", "Distributed caching", "Data persistence", "Pub/sub capabilities", "Multi-AZ support"],
          cons: ["Additional infrastructure cost", "Network latency", "Cache invalidation complexity"],
          impact: "50% reduction in database load with improved response times"
        },
        {
          decision: "Data Warehouse",
          selected: "Amazon Redshift",
          alternative: "MySQL with read replicas",
          pros: ["Selected: Amazon Redshift", "Columnar storage for analytics", "Petabyte scale", "SQL compatibility", "Integration with BI tools"],
          cons: ["Higher cost for small datasets", "Cold start latency", "Not suitable for OLTP"],
          impact: "10x faster analytics queries compared to traditional RDBMS"
        },
        {
          decision: "ETL Processing",
          selected: "AWS Glue",
          alternative: "Custom Python scripts",
          pros: ["Selected: AWS Glue", "Serverless ETL", "Built-in data catalog", "Automatic schema discovery", "Cost-effective for sporadic jobs"],
          cons: ["Limited customization", "AWS ecosystem dependency", "Cold start delays"],
          impact: "70% reduction in ETL development and maintenance effort"
        }
      ],
      designPatterns: [
        "Third Normal Form (3NF) for transactional data integrity",
        "Denormalization for analytics and reporting workloads",
        "Horizontal partitioning (sharding) for large user tables",
        "Composite indexing for multi-column query optimization",
        "Foreign key constraints for referential integrity"
      ],
      securityFeatures: [
        "Encryption at rest using AWS KMS for RDS and DynamoDB",
        "Encryption in transit with SSL/TLS for all connections",
        "VPC isolation with private subnets for databases",
        "IAM database authentication for fine-grained access",
        "Automated backups with 7-day retention",
        "Database activity streaming to CloudWatch Logs"
      ],
      performanceOptimizations: [
        "Query optimization with EXPLAIN ANALYZE",
        "Connection pooling using PgBouncer/ProxySQL",
        "Read replicas for read-heavy workloads",
        "Redis caching for frequently accessed data",
        "Partitioning large tables by date or region",
        "Index optimization for common query patterns"
      ],
      costOptimization: [
        "Reserved Instances for database savings",
        "Automated backup lifecycle management",
        "Storage optimization strategies",
        "Query performance tuning for cost efficiency",
        "Capacity planning and right-sizing"
      ]
    }
  },
  "static-web": {
    title: "Static Web Deployment",
    category: "Static Web Deployment",
    technologies: ["S3 Static Hosting", "CloudFront CDN", "Route 53", "SSL/TLS"],
    deploymentPlatform: "AWS Cloud Infrastructure",
    status: "Deployed to Production",
    description: {
      main: "This portfolio demonstrates expertise in static website deployment using AWS S3 hosting services. Each project showcases optimized static web hosting solutions leveraging AWS CloudFront CDN for global content delivery, Route 53 for DNS management, and SSL/TLS certificates for secure connections.",
      secondary: "The static web deployments feature high-performance websites with global CDN distribution, automated SSL certificate management, and cost-effective hosting solutions. All projects are optimized for speed, security, and scalability with proper caching strategies and content optimization."
    },
    images: [
      { src: "Projects/react_deployemnt/React Main.png", alt: "Static Web Main" },
      { src: "Tools/S3_Bucket/S3_1.png", alt: "S3 Static Hosting Setup" },
      { src: "Tools/S3_Bucket/S3_2.png", alt: "S3 Bucket Configuration" },
      { src: "Tools/S3_Bucket/S3_3.png", alt: "S3 Website Settings" },
      { src: "Tools/S3_Bucket/S3_4.png", alt: "S3 Security Configuration" }
    ],
    features: [
      {
        icon: "bi-cloud-arrow-up",
        title: "S3 Static Hosting",
        description: "Reliable and cost-effective static website hosting using AWS S3 with automated deployment workflows and version control integration."
      },
      {
        icon: "bi-speedometer2",
        title: "CloudFront CDN",
        description: "Global content delivery network for lightning-fast website loading times and improved user experience across all geographic locations."
      },
      {
        icon: "bi-shield-check",
        title: "SSL/TLS Security",
        description: "Automated SSL certificate management with AWS Certificate Manager ensuring secure HTTPS connections for all website visitors."
      },
      {
        icon: "bi-globe",
        title: "Route 53 DNS",
        description: "Reliable DNS management with Route 53 for custom domain routing, health checks, and high availability website access."
      }
    ],
    architecture: {
      title: "Static Web Deployment Architecture",
      diagram: `
        <div class="architecture-diagram">
          <h4>Serverless Static Hosting</h4>
          <div class="architecture-flow">
            <div class="flow-step">
              <div class="step-icon"><i class="bi bi-code-square"></i></div>
              <div class="step-content">
                <h5>Development</h5>
                <p>Static Files → Version Control → CI/CD</p>
              </div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="step-icon"><i class="bi bi-cloud-upload"></i></div>
              <div class="step-content">
                <h5>S3 Hosting</h5>
                <p>S3 Bucket → Static Website Hosting</p>
              </div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="step-icon"><i class="bi bi-globe"></i></div>
              <div class="step-content">
                <h5>Global Distribution</h5>
                <p>CloudFront → Route 53 → Users</p>
              </div>
            </div>
          </div>
        </div>
      `,
      tradeOffs: [
        {
          decision: "Hosting Solution",
          selected: "S3 Static Hosting",
          alternative: "Traditional Web Server",
          pros: ["Selected: S3 Static Hosting", "99.999999999% (11 9's) durability", "$0.023/GB vs $50-100/month server costs", "Automatic scaling", "Zero server maintenance"],
          cons: ["Static content only", "No server-side processing", "Limited to web assets"],
          impact: "95% cost reduction with improved reliability for static websites"
        },
        {
          decision: "Content Delivery",
          selected: "CloudFront CDN",
          alternative: "Direct S3 Access",
          pros: ["Selected: CloudFront CDN", "300+ edge locations globally", "DDoS protection via AWS Shield", "SSL/TLS termination", "Request/response transformation"],
          cons: ["Additional $0.085/GB transfer cost", "Cache invalidation propagation time"],
          impact: "60% faster load times globally with enhanced security"
        },
        {
          decision: "SSL Management",
          selected: "AWS Certificate Manager",
          alternative: "Let's Encrypt",
          pros: ["Selected: AWS Certificate Manager", "Free SSL certificates", "Automatic renewal", "Wildcard certificate support", "AWS service integration"],
          cons: ["Limited to AWS services", "Cannot export private keys"],
          impact: "Zero SSL management overhead with enterprise-grade certificates"
        },
        {
          decision: "Deployment Automation",
          selected: "S3 Sync via CLI",
          alternative: "Manual Upload",
          pros: ["Selected: S3 Sync via CLI", "Automated synchronization", "Only changed files uploaded", "Scriptable deployments", "Version control integration"],
          cons: ["Requires AWS CLI setup", "Learning curve for scripting"],
          impact: "90% faster deployments with zero human error risk"
        }
      ],
      securityFeatures: [
        "SSL/TLS encryption via CloudFront with HTTP to HTTPS redirect",
        "S3 bucket policies blocking direct public access",
        "CloudFront Origin Access Identity (OAI) for secure S3 access",
        "AWS Shield Standard for DDoS protection",
        "Security headers (HSTS, CSP, X-Frame-Options) via CloudFront"
      ],
      performanceOptimizations: [
        "CloudFront edge locations for global content delivery",
        "Gzip compression for all text-based assets",
        "HTTP/2 support for improved multiplexing",
        "Browser caching with optimized Cache-Control headers",
        "CloudFront regional edge caches for improved performance"
      ],
      costOptimization: [
        "S3 Standard storage class for active website content",
        "CloudFront price class optimization based on target audience",
        "S3 lifecycle policies for old website versions",
        "Data transfer optimization through CloudFront caching",
        "Reserved CloudFront pricing for high-traffic sites"
      ]
    }
  }
};
