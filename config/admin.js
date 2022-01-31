module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '49fc484191dae8f32458c07f35f211c6'),
  },
});
