export default function handler(req, res) {
  res.setPreviewData({ user: "Haritha" });
  res.redirect(req.query.redirect);
}
