module.exports = {
  apps: [
    {
      name: 'MITS 2.0',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      cron_restart: '0 0 * * *',
			kill_timeout: 10000,
			max_memory_restart: '512M',
			autorestart: true,
			out_file: './logs/service_core.log',
			error_file: './logs/service_core.err',
			log_date_format: 'YYYY-MM-DD HH:mm:ss SSS',
      args: 'start',
      watch: true,
    }
  ]
}
