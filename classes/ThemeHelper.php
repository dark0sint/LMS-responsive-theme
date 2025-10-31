<?php
class ThemeHelper {
    public static function getProgress($userId, $courseId) {
        // Simulate progress calculation (replace with DB query)
        return 60; // Percentage
    }
    
    public static function renderModule($title, $content) {
        return "<div class='module'><h3>$title</h3><p>$content</p></div>";
    }
}
?>
